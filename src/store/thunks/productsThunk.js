import { apiClient } from "@/services/apiClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchProducts = createAsyncThunk(
//   "product/fetchProduct",
//   async (categoryId, { rejectWithValue }) => {
//     try {
//       const path = categoryId
//         ? `/products?category=${categoryId}`
//         : `/products`;
//       const response = await apiClient.get(path);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data);
//     }
//   }
// );

// export const fetchProducts = createAsyncThunk(
//   "product/fetchProduct",
//   async ({ categoryId, sort }, { rejectWithValue }) => {
//     try {
//       // Eğer sort parametresi varsa, URL'yi güncelliyoruz
//       const path = categoryId
//         ? `/products?category=${categoryId}${sort ? `&sort=${sort}` : ""}`
//         : `/products${sort ? `?sort=${sort}` : ""}`;

//       const response = await apiClient.get(path);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data);
//     }
//   }
// );

export const fetchProducts = createAsyncThunk(
  "product/fetchProduct",
  async ({ categoryId, sort, filter }, { rejectWithValue }) => {
    try {
      let path = `/products`;

      if (categoryId) {
        path += `?category=${categoryId}`;
      }
      if (sort) {
        path += `${categoryId ? "&" : "?"}sort=${sort}`;
      }
      if (filter) {
        path += `${categoryId || sort ? "&" : "?"}filter=${filter}`;
      }

      const response = await apiClient.get(path);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);
