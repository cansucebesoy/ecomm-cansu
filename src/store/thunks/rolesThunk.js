import { createAsyncThunk } from "@reduxjs/toolkit";
import { setRoles } from "../ClientSlice/ClientSlice";
import { apiClient } from "@/services/apiClient";

export const fetchRoles = createAsyncThunk(
  "client/fetchRoles",
  async (_, { dispatch, getState }) => {
    const { roles } = getState().client;

    if (roles.length > 0) {
      return;
    }
    try {
      const response = await apiClient.get("/roles");
      dispatch(setRoles(response.data));
      return response.data;
    } catch (error) {
      console.error("roller alınırken hata oluştu:", error);
    }
  }
);

// async () => {
//   try {
//     const response = await apiClient.get("/roles");
//     setRoles(response.data);
//     formDataInitial.role_id = 3;
//   } catch (e) {
//     console.error("Error fetching roles:", error);
//   }
