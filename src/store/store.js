import { configureStore } from "@reduxjs/toolkit";
import { clientReducer } from "./clientSlice/clientSlice";
import { productReducer } from "./productSlice/productSlice";

export const store = configureStore({
  reducer: {
    client: clientReducer,
    product: productReducer,
  },
});
