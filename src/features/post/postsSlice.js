import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const response = await fetch('https://fakestoreapiserver.reactbd.com/users');
        if(!response.ok){
            throw new Error("hello i am error")
            // thunkApi.rejectWithValue("response was not okay")
        }
        return response.json()
    }
)

const initialState = {
    posts: [],
    isLoading: false,
    isError: null
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: (builder) => {
        builder
                .addCase(fetchPosts.pending, (state) => {
                    state.isLoading = true
                })
                .addCase(fetchPosts.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.posts = action.payload
                })
                .addCase(fetchPosts.rejected, (state, action) => {
                    state.isLoading = false;
                    state.isError = action.error?.message || "Something went wrong!"
                    console.log(action.error);
                })
    }
});

export default postsSlice.reducer;