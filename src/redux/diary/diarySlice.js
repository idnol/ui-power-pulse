import { createSlice } from "@reduxjs/toolkit";
import { addExercise, addProduct, getDiary, removeExercise, removeProduct } from "./api";


export const diarySlice = createSlice({
    name: "diary",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        isSuccess: false
        },

        extraReducers: (builder) => {
            builder
    
            .addCase(getDiary.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getDiary.fulfilled, (state, action) => {
                state.items = action.payload;
                state.isLoading = false;
                state.error = null;
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
                const productId = action.payload.id;
                state.items.products = state.items.products.filter(product => product._id !== productId);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(removeProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(removeExercise.fulfilled, (state, action) => {
                const exerciseId = action.payload.id;
                state.items.exercises = state.items.exercises.filter(exercise => exercise._id !== exerciseId);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(removeExercise.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
        },
})

export const diaryReducer = diarySlice.reducer;