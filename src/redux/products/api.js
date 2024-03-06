import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader } from '../auth/api';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTVlZGY3NjAwYzQ4ZjY3MTc5YzMxOCIsImlhdCI6MTcwOTcyMjA5NywiZXhwIjoxNzA5ODA0ODk3fQ.6nH_lVmCfHnZuDob3BvjwaQ_gZN84zzRMHVyYvTXb1Q"

axios.defaults.baseURL = 'http://localhost:3333/api/products';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (filters, thunkAPI) => {
    try {
      setAuthHeader(token);
      console.log(filters);
      const response = await axios.get('/', filters);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCategories = async () => {
  setAuthHeader(token);
  const response = await axios.get(`/categories`);
  return response.data;
};
