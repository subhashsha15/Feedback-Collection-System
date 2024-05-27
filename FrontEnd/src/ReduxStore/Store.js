import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './loginSlice'
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        login: loginSlice,
        auth: authSlice,
    }
})

export default store;