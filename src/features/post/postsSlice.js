import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        return response.json()
    }
)

const initialState = {
    posts: [],
    isLoading: false,
    isError: false
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: (builder) => {
        builder
                .addCase(fetchPosts.pending, (state) => {
                    state.isError = false,
                    state.isLoading = true
                })
                .addCase(fetchPosts.fulfilled, (state, action) => {
                    state.isError = false,
                    state.isLoading = false,
                    state.posts = action.payload
                })
                .addCase(fetchPosts.rejected, (state, action) => {
                    state.isLoading = false,
                    state.isError = action.error?.message
                })
    }
});

export default postsSlice.reducer;