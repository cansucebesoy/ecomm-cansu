import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUser } from "../ClientSlice/ClientSlice";

export const logoutUser = createAsyncThunk(
  "client/logoutUser",
  (_, { dispatch }) => {
    dispatch(setUser(null));
    localStorage.removeItem("token");
  }
);
