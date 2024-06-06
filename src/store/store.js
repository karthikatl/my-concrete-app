
import { configureStore } from '@reduxjs/toolkit';
import { concreteApi } from '../services/concreteApi';
import concreteReducer from './concreteSlice';

const store = configureStore({
  reducer: {
    concrete: concreteReducer,
    [concreteApi.reducerPath]: concreteApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(concreteApi.middleware),
});

export default store;