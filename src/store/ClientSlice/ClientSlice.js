import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../thunks/loginThunk";

const initialState = {
  user: null,
  addressList: [],
  creditCard: [],
  roles: [],
  theme: "light",
  language: "en",
};

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setRoles: (state, action) => {
      state.roles = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { setUser, setLanguage, setRoles, setTheme } = clientSlice.actions;

export default clientSlice.reducer;
