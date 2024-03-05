import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { toast } from 'react-toastify';

axios.defaults.baseURL = 'http://localhost:3333/api';

export const fetchListDiaryProdact = createAsyncThunk(
  'fetchListDiaryProdact',
  async () => {
    // try {
    const response = await axios.get(`/products`);
    // diaries;
    console.log(response);
    return response;
    // } catch (error) {
    //   // toast.error('Oops... Something went wrong! Try again!');
    //   return rejectWithValue('Oops... Something went wrong!');
    // }
  }
);

export const deleteDiaryProdact = createAsyncThunk(
  'deleteDiaryProdact',
  async (productDetails, { rejectWithValue }) => {
    const { id } = productDetails;
    try {
      await axios.delete(`/product/${id}`);

      return id;
    } catch (error) {
      // toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  }
);
