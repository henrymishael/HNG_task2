import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart-slice";
// import dummyReducer  from './slices/cart-slice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
