import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const current = createAsyncThunk(
  'users/current',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  'users/profile',
  async (data, thunkAPI) => {
    try {
      const { data } = await axios.patch('/users/profile', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'users/avatar',
  async (data, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/avatar', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);