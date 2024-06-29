import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://feedback-collection-system-5t4k.onrender.com/feedback/api';  // Replace with your actual API URL

export const fetchForms = createAsyncThunk('forms/fetchForms', async () => {
    const response = await fetch(`${apiUrl}/form/fetch`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to fetch forms');
    }
    return await response.json();
});

export const fetchFilteredForms = createAsyncThunk('forms/fetchFilteredForms', async (filters) => {
    const query = new URLSearchParams(filters).toString();
    const response = await fetch(`${apiUrl}/form/fetch?${query}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to fetch filtered forms');
    }
    return await response.json();
});

export const submitForm = createAsyncThunk('forms/submitForm', async (form) => {
    const response = await fetch(`${apiUrl}/form/submit`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
    });
    console.log("response",response);
    const data = await response.json();
    console.log("data",data);
    if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
    }
    return data;
});

export const editForm = createAsyncThunk('forms/editForm', async ({ id, form }) => {
    const response = await fetch(`${apiUrl}/form/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to edit form');
    }
    return await response.json();
});

export const deleteForm = createAsyncThunk('forms/deleteForm', async (id) => {
    const response = await fetch(`${apiUrl}/form/delete/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to delete form');
    }
    return id;
});

const formSlice = createSlice({
    name: 'forms',
    initialState: {
        forms: [],
        filteredForms: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchForms.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchForms.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.forms = action.payload;
                state.filteredForms = action.payload;
            })
            .addCase(fetchForms.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchFilteredForms.fulfilled, (state, action) => {
                state.filteredForms = action.payload;
            })
            .addCase(submitForm.pending, (state) => {
                state.status = 'loading';
                state.error = null; // Reset error on new request
            })
            .addCase(submitForm.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.forms.push(action.payload);
            })
            .addCase(submitForm.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(editForm.fulfilled, (state, action) => {
                const index = state.forms.findIndex(form => form._id === action.payload._id);
                if (index !== -1) {
                    // Use immer's mutable update syntax to update the form
                    state.forms[index] = action.payload;
                }
            })
            .addCase(editForm.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(editForm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteForm.fulfilled, (state, action) => {
                state.forms = state.forms?.filter(form => form._id !== action.payload);
            });
    },
});

export default formSlice.reducer;
