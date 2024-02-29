import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  // extraReducers: builder => {
  //
  // }
})

export const profileReducer = profileSlice.reducer;