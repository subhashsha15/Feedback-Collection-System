import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './loginSlice'
import authSlice from './authSlice';
import formSlice from './formSlice';
import dashboardSlice from './dashboardSlice';

const store = configureStore({
    reducer: {
        login: loginSlice,
        auth: authSlice,
        forms: formSlice,
        dashboard: dashboardSlice,
    }
})

export default store;