import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setRoles } from "../ClientSlice/ClientSlice";

export const fetchRoles = createAsyncThunk(
  "client/fetchRoles",
  async (_, { dispatch, getState }) => {
    const { roles } = getState().client;

    if (roles.length > 0) {
      return;
    }

    try {
      const response = await axios.get(
        "https://workintech-fe-ecommerce.onrender.com/roles"
      );
      dispatch(setRoles(response.data));
    } catch (error) {
      console.error("roller alınırken hata oluştu:", error);
    }
  }
);
