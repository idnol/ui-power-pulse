import { createSlice } from '@reduxjs/toolkit';
import { current, updateAvatar, updateProfile } from './api.js';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  extraReducers: builder => {
    builder
      .addCase(current.pending, state => {
        state.isLoading = true;
      })
      .addCase(current.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(current.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProfile.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateAvatar.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.avatar = action.payload.avatar;
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
})

export const profileReducer = profileSlice.reducer;