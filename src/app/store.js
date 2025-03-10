import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"
import postsReducer from '../features/post/postsSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer
    }
});

export default store;