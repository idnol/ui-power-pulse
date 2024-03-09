import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (searchParams, thunkAPI) => {
    try {
      const response = await axios.get('products/', { params: searchParams });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCategories = async () => {
  const response = await axios.get(`products/categories`);
  return response.data;
};