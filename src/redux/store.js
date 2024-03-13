import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice.js';
import { exerciseReducer } from './exercises/exerciseSlice.js';
import { productsReducer } from './products/productSlice.js';
import { profileReducer } from './profile/profileSlice.js';
import { diaryReducer } from './diary/diarySlice.js';
import { statisticsReducer } from './statistics/statisticsSlice.js';
import { filterReducer } from './exercises/filterSlice.js';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    exercises: exerciseReducer,
    products: productsReducer,
    profile: profileReducer,
    diary: diaryReducer,
    statistics: statisticsReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
