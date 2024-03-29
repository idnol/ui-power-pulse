import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios.js';
import { getDate } from '../../components/parts/handleData.js';

export const getDiary = createAsyncThunk(
    'diary/getDiaries', async (dateProf = new Date(), thunkAPI) =>{
      const formatedDate = getDate(dateProf);
      try {
          const result = await axios.get(`/diaries?date=${formatedDate}`);
          return result.data
      } catch (error){
          return thunkAPI.rejectWithValue(error.message);
      }
    }
)

export const addProduct = createAsyncThunk(
    'diary/addProduct', async (newProduct, thunkAPI) =>{
        try {
            const result = await axios.post('/diaries/product', newProduct);
            return result.data
        } catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const addExercise = createAsyncThunk(
    'diary/addExercise', async (newExercise, thunkAPI) =>{
        try {
            const result = await axios.post('/diaries/exercise', newExercise);
            return result.data
        } catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const removeProduct = createAsyncThunk(
    'diary/deleteProduct', async (product, thunkAPI) =>{
        try {
          const deleted = await axios.delete(`/diaries/product`, { data: product });
          return deleted.data
        } catch (error){
          return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const removeExercise = createAsyncThunk(
    'diary/deleteExercise', async (exercise, thunkAPI) =>{
        try {
          const deleted = await axios.delete(`/diaries/exercise`, { data: exercise });
          return deleted.data
        } catch (error){
          return thunkAPI.rejectWithValue(error.message);
        }
    }
)