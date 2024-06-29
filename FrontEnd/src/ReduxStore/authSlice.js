import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const BASE_URL = 'https://feedback-collection-system-5t4k.onrender.com/feedback/api/user';

export const registerUser = createAsyncThunk('auth/register', async (user) => {
    const response = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to register');
    }
    return await response.json();
});

export const loginUser = createAsyncThunk('auth/login', async (credentials) => {
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to login');
    }
    return await response.json();
});

export const logoutUser = createAsyncThunk('auth/logout', async (token) => {
    const response = await fetch(`${BASE_URL}/logout`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}` // Include the token in the Authorization header
        }
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to logout');
    }
    return response.json();
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.loading = false;
                state.user = null;
                state.error = null;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});


export default authSlice.reducer;