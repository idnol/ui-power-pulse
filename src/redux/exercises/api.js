import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios.js';

export const exercisesGetAll = createAsyncThunk(
  'exercises',
  async ({ type, name }, thunkAPI) => {
    try {
      const result = await axios(`/exercises?${type}=${name}`);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const exercisesGetFilters = createAsyncThunk(
  'exercises/filters',
  async (_, thunkAPI) => {
    try {
      const result = await axios('/exercises/filters');
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
