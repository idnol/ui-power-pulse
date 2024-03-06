import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (filters, thunkAPI) => {
    try {
      console.log(filters);
      const response = await axios.get('/', filters);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCategories = async () => {
  const response = await axios.get(`/categories`);
  return response.data;
};