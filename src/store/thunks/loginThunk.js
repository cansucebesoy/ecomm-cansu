import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUser } from "../ClientSlice/ClientSlice";
import { apiClient } from "@/services/apiClient";

export const loginUser = createAsyncThunk(
  "client/loginUser", //sliceName/ActionName
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("/login", loginData);
      const { token } = response.data;
      if (token) {
        if (loginData.remember) {
          localStorage.setItem("token", token);
        } else {
          sessionStorage.setItem("token", token);
        }
      }
      // dispatch(setUser(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// (loginData, thunkAPI) => {
//     const { dispatch, rejectWithValue } = thunkAPI; // İçinden çekiyoruz.
//   }

// request body nedir*
// req parameters nedir path variables nedi hangisi nerede kullanılır ?

// navbar güncelle
// roles thunk a bakcaz bi ??
