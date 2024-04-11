import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import ProductsSlice from './features/ProductsSlice';
import CartSlice from './features/CartSlice';
import logger from 'redux-logger'

//combine all reduces in to one
const reducers = combineReducers({
  products: ProductsSlice,
  cartItems: CartSlice,
});

//To caching the data in the app
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

//creating store with all reducers and middleware
//middleware will help to store api paylod in to the redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false, immutableCheck: false}).concat(logger),
});

const persistor = persistStore(store);
export {store, persistor};