import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

import axios from '../../axios.js';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'users/register',
  async (data, thunkAPI) => {
    try {
      const result = await axios.post('/users/register', data);
      setAuthHeader(result.data.token);
      return result.data;
    } catch (error) {
        toast.error(error.message);
        return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'users/login',
  async (data, thunkAPI) => {
    try {
      const result = await axios.post('/users/login', data);
      setAuthHeader(result.data.token);
      return result.data;
    } catch (error) {
        toast.error(error.message);
        return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'users/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
        clearAuthHeader();
    } catch (error) {
        toast.error(error.message);
        return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if (persistedToken === null) {
            toast.error('Unable to fetch user');
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
            setAuthHeader(persistedToken);
            const result = await axios.get('/users/current');
            return result.data;
        } catch (error) {
            toast.error('Unable to fetch user');
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);