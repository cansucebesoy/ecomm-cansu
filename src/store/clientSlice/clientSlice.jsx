import { createSlice } from "@reduxjs/toolkit";

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
});

export const { setUser, setLanguage, setRoles, setTheme } = clientSlice.actions;

export default clientSlice.reducer;
