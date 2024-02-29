import { createSlice } from '@reduxjs/toolkit';

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  // extraReducers: builder => {
  //
  // }
})

export const exercisesReducer = exercisesSlice.reducer;