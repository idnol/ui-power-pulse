import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  // extraReducers: builder => {
  //
  // }
})

export const authReducer = authSlice.reducer;