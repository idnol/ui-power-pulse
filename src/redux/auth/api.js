import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios.js';

export const register = createAsyncThunk(
  'users/register',
  async (data, thunkAPI) => {
    try {
      const result = await axios.post('/users/register', data);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'users/login',
  async (data, thunkAPI) => {
    try {
      const result = await axios.post('/users/login', data);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'users/logout',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/logout');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);