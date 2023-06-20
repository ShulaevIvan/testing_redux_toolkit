import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    loading: false,
    error: null,
};

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        return await fetch('https://api.publicapis.org/entries').then((response) => response.json())
    }
);

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        removeReducer: (state, action) => {
            state.users = state.users.filter((item) => item.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
            state.error = null;
            state.loading = false;
        })
        .addCase(fetchUsers.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
    }
});

export const {removeUser} = userSlice.actions;
export default userSlice.reducer;