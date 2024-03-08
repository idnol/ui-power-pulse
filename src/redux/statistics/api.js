import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios.js';

export const statisticsGetAll = createAsyncThunk(
  'statistics', async (_, thunkAPI) =>{
    try {
      const result = await axios('/');
      return result.data
    } catch (error){
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)