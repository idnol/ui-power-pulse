import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  // extraReducers: builder => {
  //
  // }
})

export const productsReducer = productsSlice.reducer;