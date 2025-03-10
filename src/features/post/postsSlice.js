import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    posts: [],
    isLoading: false,
    isError: null
};

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        return response.json();
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isError = null;
                state.isLoading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error?.message
            })
    }
});

export default postsSlice.reducer;