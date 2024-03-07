import { createSlice } from '@reduxjs/toolkit';
import { statisticsGetAll } from './api.js';

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  extraReducers: builder => {
      builder
        .addCase(statisticsGetAll.pending, state => {
          state.isLoading = true;
        })
        .addCase(statisticsGetAll.fulfilled, (state, action) => {
          state.isLoading = false;
          state.items = action.payload;
        })
        .addCase(statisticsGetAll.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })        
  }
})

export const statisticsReducer = statisticsSlice.reducer;