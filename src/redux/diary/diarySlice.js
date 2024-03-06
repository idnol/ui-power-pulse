import { createSlice } from "@reduxjs/toolkit";
import { addExercise, addProduct, getDiary, removeExercise, removeProduct } from "./api";


export const diarySlice = createSlice({
    name: "diary",
    initialState: {
        items: [], //what is here?
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
                state.items = action.payload; // what is payload?
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
            .addCase(addProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items.products.push(action.payload);    
                state.error = null;
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(addExercise.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addExercise.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items.exercises.push(action.payload); // structure of items? exercises?
                state.error = null;
            })
            .addCase(addExercise.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(removeProduct.fulfilled, (state, action) => {
                const contactId = action.payload.id;
                state.items = state.items.filter(contact => contact.id !== contactId);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(removeProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(removeExercise.fulfilled, (state, action) => {
                const contactId = action.payload.id;
                state.items = state.items.filter(contact => contact.id !== contactId);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(removeExercise.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
        },
})