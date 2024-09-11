import { apiClient } from "@/services/apiClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "product/fetchProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get("/products");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);
