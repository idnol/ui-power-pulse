import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { setAuthHeader } from '../auth/api';

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTVlZGY3NjAwYzQ4ZjY3MTc5YzMxOCIsImlhdCI6MTcwOTgwNTIyOCwiZXhwIjoxNzA5ODg4MDI4fQ.2RE9n4waW-F7l30e5B9SJ81uB1pxPXbEbdUBjJ7LKcA"

// axios.defaults.baseURL = 'http://localhost:3333/api/products';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (searchParams, thunkAPI) => {
    try {
      const response = await axios.get('/', { params: searchParams });
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