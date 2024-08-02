import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    signIn: (state) => {
      state.isAuthenticated = true;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;