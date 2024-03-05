import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios.js';

export const exercisesGetAll = createAsyncThunk(
  'exercises', async (_, thunkAPI) =>{
    try {
      const result = await axios('/exercises');
      return result.data
    } catch (error){
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const exercisesGetFilters = createAsyncThunk(
  'exercises/filters', (_, thunkAPI)=>{
    try {
      const result = axios('/exercises/filters');
      return result.data
    } catch (error){
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)
