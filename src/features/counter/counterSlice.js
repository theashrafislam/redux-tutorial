import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increase: (state) => {
            state.value = state.value + 1;
        },
        decrease: (state) => {
            if (state.value > 0) {
                state.value = state.value - 1;
            }
        },
        reset: (state) => {
            state.value = state.value = 0;
        }
    }
});

export const { increase, decrease, reset } = counterSlice.actions;
export default counterSlice.reducer;