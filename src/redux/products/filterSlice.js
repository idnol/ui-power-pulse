import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {filters: {
    title: "",
    category: "",
    recommended: "all"
   }},
   reducers: {
    findProducts(state, action) {
      state.filters = {...action.payload};
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { findProducts } = filterSlice.actions;