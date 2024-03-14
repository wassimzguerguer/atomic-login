import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    password: "",
    isAuthenticated: false,
  },
  reducers: {
    changeEmail(state, action) {
      state.email = action.payload;
      localStorage.setItem("Email", state.email);
      console.log(state.email);
      
    },
  
    changePassword(state, action) {
      state.password = action.payload;
    },
    isLogin(state) {
      state.isAuthenticated = true;
    },
  },
});


export const { changeEmail, changePassword, isLogin } = authSlice.actions;
export const authReducer = authSlice.reducer;
