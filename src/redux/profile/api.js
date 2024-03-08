import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {setAuthHeader} from '../auth/api'

export const current = createAsyncThunk(
  'users/current',
  async (_, thunkAPI) => {
    try {
      const res = await axios('/users/current');
      setAuthHeader(res.data.token);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  'users/profile',
  async (requestData, thunkAPI) => {
    try {

      const response = await axios.patch('/users/profile', requestData);

      setAuthHeader(response.data.token);

      const updatedProfileData = response.data;
      return updatedProfileData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'users/avatar',
  async (file, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatar', file);

      const res = await axios.post('/users/avatar', formData, {
        headers: { 'content-type': 'multipart/form-data' },
      });

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

