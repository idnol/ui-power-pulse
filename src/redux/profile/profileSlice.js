import { createSlice } from '@reduxjs/toolkit';
import { current, updateAvatar, updateProfile } from './api.js';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    items: {},
    isLoading: false,
    error: null
  },
  reducers: {
    addUserInfo: (state, action) => {
      const payloadData = action.payload;

      if (payloadData) {
        state.items = { ...action.payload };
      }
    },
    setBirthdate: (state, action) => {
      state.items.bodyData.birthday = action.payload;
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(current.pending, state => {
        state.isLoading = true;
      })
      .addCase(current.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(current.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProfile.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateAvatar.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.items && state.items.bodyData) {
          state.items.bodyData.avatar = action.payload.avatar;
        }      
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
})
export const { addUserInfo, setLoading,setBirthdate } = profileSlice.actions;

export const profileReducer = profileSlice.reducer;