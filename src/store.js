import { configureStore } from '@reduxjs/toolkit';
import memeReducer from './memeReducer';

const store = configureStore({
    reducer: memeReducer,
});

export default store;