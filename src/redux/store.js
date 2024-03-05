import { combineReducers, configureStore } from '@reduxjs/toolkit';

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

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const usersReducer = combineReducers({
  auth: authReducer,
  exercises: exerciseReducer,
  products: productsReducer,
  profile: profileReducer
});

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    users: usersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});

export const persistor = persistStore(store);