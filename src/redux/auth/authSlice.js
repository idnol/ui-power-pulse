import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser} from './api.js';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: "",
    isAuthenticated: false,
    isRefreshing: true,
    isLoading: false,
    error: null,
    isLoggedin: false,
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
        state.isLoggedin = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedin = true;
        // window.location.href = '/ui-power-pulse/profile'
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isLoggedin = false;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.isLoggedin = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedin = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isLoggedin = false;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
        state.isLoggedin = true;
      })
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.token = "";
        state.user = { name: null, email: null };
        state.isLoggedin = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isLoggedin = true;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isRefreshing = false;
        state.isLoggedin = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedin = false;
      });
  }
});

export const authReducer = authSlice.reducer;