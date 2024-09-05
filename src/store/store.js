import { configureStore } from "@reduxjs/toolkit";
import { clientReducer } from "./ClientSlice/ClientSlice";
import { productReducer } from "./ProductSlice/ProductSlice";
import { shoppingCartReducer } from "./ShoppingCartSlice/ShoppingCartSlice";

export const store = configureStore({
  reducer: {
    client: clientReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer,
  },
});
