import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios.js';

export const getDiary = createAsyncThunk(
    'diaries/getDiaries', async (_, thunkAPI) =>{
        try {
            const result = await axios('/diaries');
            return result.data
        } catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const addProduct = createAsyncThunk(
    'diaries/addProduct', async (newProduct, thunkAPI) =>{
        try {
            const result = await axios.post('/diaries/product', newProduct);
            return result.data
        } catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const addExercise = createAsyncThunk(
    'diaries/addExercise', async (newExercise, thunkAPI) =>{
        try {
            const result = await axios.post('/diaries/exercise', newExercise);
            return result.data
        } catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const removeProduct = createAsyncThunk(
    'diaries/deleteProduct', async (id, thunkAPI) =>{
        try {
            const deleted = await axios.delete(`/diaries/product${id}`);
            return deleted.data
        } catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const removeExercise = createAsyncThunk(
    'diaries/deleteExercise', async (id, thunkAPI) =>{
        try {
            const deleted = await axios.delete(`/diaries/exercise${id}`);
            return deleted.data
        } catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)