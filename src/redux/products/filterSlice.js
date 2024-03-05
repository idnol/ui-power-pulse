import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    title: "",
    category: "",
    recommended: "all"
   },
  reducers: {
    findProducts: {
        prepare(filter) {
          return {
            payload: {
              value: filter,
            },
          };
        },
        reducer(state, action) {
          state.filter = {...state.filters, ...action.payload.value};
        },
      },
    
    // (state, action) {
    //   state.filters ={...state.filters, ...action.payload};
    // },
  },
});

export const filterReducer = filterSlice.reducer;
export const { findProducts } = filterSlice.actions;