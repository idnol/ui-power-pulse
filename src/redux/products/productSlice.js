import { createSlice } from '@reduxjs/toolkit';
import {fetchProducts} from './api'

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  extraReducers: builder => {
    builder
    .addCase(fetchProducts.pending, handlePending)
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    })
    .addCase(fetchProducts.rejected, handleRejected)
  }
})

export const productsReducer = productsSlice.reducer;