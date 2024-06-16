import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const apiUrl = 'http://localhost:5000/feedback/api';  // Replace with your actual API URL

export const fetchForms = createAsyncThunk('forms/fetchForms', async () => {
    const response = await fetch(`${apiUrl}/form/fetch`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        const error = await response.json();
        console.log(error);
        throw new Error(error.message || 'Failed to fetch forms');
    }
    // console.log(response.json());
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
    if (!response.ok) {
        const error = await response.json();
        console.log(error);
        throw new Error(error.message || 'Failed to submit form');
    }
    return await response.json();
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
        console.log(error);
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
        console.log(error);
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
            .addCase(submitForm.fulfilled, (state, action) => {
                state.forms.push(action.payload);
            })
            .addCase(editForm.fulfilled, (state, action) => {
                const index = state.forms.findIndex(form => form._id === action.payload._id);
                console.log("state-forms=", state.forms);
                if (index !== -1) {
                    state.forms[index] = action.payload;
                }
                console.log('State after editForm:', state.forms);
            })
            .addCase(deleteForm.fulfilled, (state, action) => {
                state.forms = state.forms.filter(form => form._id !== action.payload);
            });
    },
});

export default formSlice.reducer;
