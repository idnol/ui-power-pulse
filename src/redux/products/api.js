import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTVlZGY3NjAwYzQ4ZjY3MTc5YzMxOCIsImlhdCI6MTcwOTU2NzQ5NCwiZXhwIjoxNzA5NjUwMjk0fQ.cAUhPSB8XSsGqh780dBUNzef8fztJK12eedKXwgjNeA"

axios.defaults.baseURL = 'http://localhost:3333/api/products';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (filters, thunkAPI) => {
    
    try {
      setAuthHeader(token);
      // const state = thunkAPI.getState();
      // const filters = state.contacts.filters;
      const response = await axios.get('/', filters);
      console.log(filters);
      console.log(response);
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
