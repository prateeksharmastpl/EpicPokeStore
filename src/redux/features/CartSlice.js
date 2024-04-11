import {createSlice} from '@reduxjs/toolkit';

//intialStates - to get the data from the store in app screens through useSelector
const initialState = {
  cartData: [],
  totalAmount: 0,
};
//created 3 reducer for cart slice - add product to cart, remove and clear complete cart once we hit the checkout
const CartSlice = createSlice({
  name: 'CartSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {cartData} = state;
      const itemPresentIndex = cartData.findIndex(
        item => item.id === action.payload.id,
      );
      //here I need the quantity in the product data so added qyantity and adding +1 on addTocart action
      if (itemPresentIndex !== -1) {
        const updatedCartData = [...cartData];
        updatedCartData[itemPresentIndex] = {
          ...updatedCartData[itemPresentIndex],
          quantity: updatedCartData[itemPresentIndex].quantity + 1,
        };
        const total = updatedCartData.reduce(
          (accumulator, currentItem) =>
            accumulator + currentItem.weight * currentItem.quantity,
          0,
        );
        return {
          ...state,
          cartData: updatedCartData,
          totalAmount: total, // created totalAmount key to get the updated price as per the selected product and muliplied by weight key which we are getting in api reponse
        };
      } else {
        const finalData = [...cartData, {...action.payload, quantity: 1}];
        const total = finalData.reduce(
          (accumulator, currentItem) =>
            accumulator + currentItem.weight * currentItem.quantity,
          0,
        );
        return {
          ...state,
          cartData: finalData,
          totalAmount: total,
        };
      }
    },
    removeFromCart: (state, action) => {
      const {cartData} = state;
      const itemPresentIndex = cartData.findIndex(
        item => item.id === action.payload,
      );
      if (itemPresentIndex !== -1) {
        const updatedCartData = [...cartData];
        if (updatedCartData[itemPresentIndex].quantity > 1) {
          updatedCartData[itemPresentIndex] = {
            ...updatedCartData[itemPresentIndex],
            quantity: updatedCartData[itemPresentIndex].quantity - 1,
          };
        } else {
          updatedCartData.splice(itemPresentIndex, 1);
        }

        const total = updatedCartData.reduce(
          (accumulator, currentItem) =>
            accumulator + currentItem.weight * currentItem.quantity,
          0,
        );
        return {
          ...state,
          cartData: updatedCartData,
          totalAmount: total,
        };
      }
    },
    clearCart: () => {
      return initialState; // set the initial state back to store to clear cart data
    },
  },
});

export const {addToCart, removeFromCart, clearCart} = CartSlice.actions;

export default CartSlice.reducer;