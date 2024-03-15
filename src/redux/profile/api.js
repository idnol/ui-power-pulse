import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios.js';
import {setAuthHeader} from '../auth/api'
import { toast } from 'react-toastify';

export const current = createAsyncThunk(
  'users/current',
  async (_, thunkAPI) => {
    try {
      const res = await axios('/users/current');
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
      if (response.status !== 200) {
        toast.error('Error');
      } else {
        return response.data;
      }
    } catch (error) {
      toast.error('Error updating user data: ' + error.message);

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
      // setAuthHeader(res.data.token);


      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

