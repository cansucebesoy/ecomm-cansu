import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "./ClientSlice/ClientSlice.js";
import productReducer from "./ProductSlice/ProductSlice.js";
import shoppingCartReducer from "./ShoppingCartSlice/ShoppingCartSlice.js";

export const store = configureStore({
  reducer: {
    client: clientReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer,
  },
});
