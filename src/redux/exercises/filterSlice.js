import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    exercisesFilter: '',
  },
  reducers: {
    setExercisesFilter(state, action) {
      state.exercisesFilter = action.payload;
      console.log(state.exercisesFilter);
    },
    clearExercisesFilter: (state) => {
      state.exercisesFilter = '';
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { setExercisesFilter, clearExercisesFilter } = filterSlice.actions;
