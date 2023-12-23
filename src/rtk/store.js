// store.js

import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/detailsSlice";
import orderReducer from "./slices/orderSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
    user: userReducer,
    product: productReducer,
    order: orderReducer,
  },
});

export default store;
