import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    exercisesFilter: '',
    category: '',
  },
  reducers: {
    setExercisesFilter(state, action) {
      state.exercisesFilter = action.payload.name;
      state.category = action.payload.category;
    },
    clearExercisesFilter: (state) => {
      state.exercisesFilter = '';
      state.category = '';
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { setExercisesFilter, clearExercisesFilter } = filterSlice.actions;
