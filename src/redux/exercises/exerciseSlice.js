import { createSlice } from '@reduxjs/toolkit';
import { exercisesGetAll, exercisesGetFilters } from './api.js';

const exerciseSlice = createSlice({
  name: 'exercises',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(exercisesGetAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(exercisesGetAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(exercisesGetAll.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(exercisesGetFilters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(exercisesGetFilters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(exercisesGetFilters.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const exerciseReducer = exerciseSlice.reducer;
