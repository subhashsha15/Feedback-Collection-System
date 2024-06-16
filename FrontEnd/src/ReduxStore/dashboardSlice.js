// dashboardSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'http://localhost:5000/feedback/api';  // Replace with your actual API URL

// Async thunk to fetch dashboard statistics
export const fetchDashboardStats = createAsyncThunk('dashboard/fetchDashboardStats', async () => {
    const response = await fetch(`${apiUrl}/dashboard`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        const error = await response.json();
        console.log(error);
        throw new Error(error.message || 'Failed to fetch dashboard statistics');
    }
    return await response.json();
});

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        totalViews: 0,
        totalSubmissions: 0,
        uniqueVisitors: 0,
        avgSessionTime: 0,
        forms: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDashboardStats.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDashboardStats.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.totalViews = action.payload.totalViews;
                state.totalSubmissions = action.payload.totalSubmissions;
                state.uniqueVisitors = action.payload.uniqueVisitors;
                state.avgSessionTime = action.payload.avgSessionTime;
                state.forms = action.payload.forms;
            })
            .addCase(fetchDashboardStats.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default dashboardSlice.reducer;
