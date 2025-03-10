import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response){
            throw new Error('Failed to fetch data');
        }
        return response.json()
    }
)

const initialState = {
    posts: [],
    isLoading: false,
    isError: ''
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: (builder) => {
        builder
                .addCase(fetchPosts.pending, (state) => {
                    state.isError = '',
                    state.isLoading = true
                })
                .addCase(fetchPosts.fulfilled, (state, action) => {
                    state.isError = '',
                    state.isLoading = false,
                    state.posts = action.payload
                })
                .addCase(fetchPosts.rejected, (state, action) => {
                    state.isLoading = false,
                    state.isError = action.error?.message || "Something went wrong!"
                    console.log(state.isError);
                    console.log(state.error);
                })
    }
});

export default postsSlice.reducer;