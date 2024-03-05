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
import { exercisesReducer } from './exercises/productSlice.js';
import { productsReducer } from './products/productSlice.js';
import { profileReducer } from './profile/profileSlice.js';
import { filterReducer } from './products/filterSlice.js';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const contactsReducer = combineReducers({
  auth: authReducer,
  exercises: exercisesReducer,
  products: productsReducer,
  filters: filterReducer,
  profile: profileReducer
});

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});

export const persistor = persistStore(store);


