import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import createAxiosInstance from '../../api';
import { CONSTANTS } from '../../constants/urls';

const initialState = {
  products: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

// All Products - API call
export const getAllProducts = createAsyncThunk(
  'getAllProducts',
  async (params,thunkAPI) => {
    try {
      const axiosInstance = createAxiosInstance();
      const response = await axiosInstance.get(`${CONSTANTS.baseUrl}pokemon?limit=${params}`);

      const productResponse = response.data.results; 

      const pokemonResponse = await Promise.all(productResponse.map(async (item) => {
        // Call the pokemon API for each item
        const res = await axiosInstance.get(item.url);
        return res.data; // Return the response
      }));
      
      return pokemonResponse;
    } catch (error) {
      console.log(
        '🚀 ~ file: ProductsSlice~ getAllProducts ~ error:',
        error,
      );
      return thunkAPI.rejectWithValue({ error: error?.message });
    }
  },
);

const ProductsSlice = createSlice({
  name: 'ProductsSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // getAllProducts cases
    builder.addCase(getAllProducts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.products = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default ProductsSlice.reducer;