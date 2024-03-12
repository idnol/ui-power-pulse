import { createSlice } from "@reduxjs/toolkit";
import { addExercise, addProduct, getDiary, removeExercise, removeProduct } from "./api";

export const diarySlice = createSlice({
    name: "diary",
    initialState: {
        items: [],
        selectedDate: new Date(),
        products: [],
        exercises: [],
        isLoading: false,
        error: null,
        isSuccess: false
        },
    reducers: {
        changeDate: (state, action) => {
            state.selectedDate = action.payload;
        },
    },
        extraReducers: (builder) => {
            builder
    
            .addCase(getDiary.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getDiary.fulfilled, (state, action) => {
                console.log(`action.payload`, action.payload);
                state.items = action.payload;
                state.isLoading = false;
                state.error = null;
                state.products = action.payload ? action.payload.products : [];
                state.exercises = action.payload ? action.payload.exercises : [];
            })
            .addCase(getDiary.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    
            .addCase(addProduct.pending, (state) => {
                state.isLoading = true;

            })
            .addCase(addProduct.fulfilled, (state) => {
                state.isLoading = false;  
                state.isSuccess = true;
                state.error = null;
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.error = action.payload;
            })

            .addCase(addExercise.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addExercise.fulfilled, (state) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.error = null;
            })
            .addCase(addExercise.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.error = action.payload;
            })

            .addCase(removeProduct.fulfilled, (state, action) => {
                state.products = action.payload.products;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(removeProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(removeExercise.fulfilled, (state, action) => {
                state.exercises = action.payload.exercises;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(removeExercise.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
        },
})

export const { changeDate } = diarySlice.actions;
export const diaryReducer = diarySlice.reducer;