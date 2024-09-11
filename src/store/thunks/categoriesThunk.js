import { apiClient } from "@/services/apiClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  "product/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get("/categories");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);
