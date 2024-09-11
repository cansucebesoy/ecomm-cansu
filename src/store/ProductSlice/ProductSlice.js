import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../thunks/categoriesThunk";
import { fetchProducts } from "../thunks/productsThunk";
const initialState = {
  categories: [],
  productList: [],
  total: 0,
  limit: 25,
  offset: 0,
  filter: "",
  fetchState: "NOT_FETCHED", //"FETCHING", "FETCHED", "FAILED"
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setProductList: (state, action) => {
      state.productList = action.productList;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setFetchState: (state, action) => {
      state.fetchState = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.fetchState = "FETCHING";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.fetchState = "FETCHED";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.fetchState = "FAILED";
      })
      .addCase(fetchProducts.pending, (state) => {
        state.fetchState = "FETCHING";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.fetchState = "FETCHED";
        state.productList = action.payload.products;
        state.total = action.payload.total;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.fetchState = "FAILED";
      });
  },
});

export const {
  setCategories,
  setProductList,
  setTotal,
  setFetchState,
  setLimit,
  setOffset,
  setFilter,
} = productSlice.actions;
export default productSlice.reducer;
