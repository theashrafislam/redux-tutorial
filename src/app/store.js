import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"
import postsReducer from '../features/post/postsSlice'
import { productsApi } from "../features/products/productsSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;