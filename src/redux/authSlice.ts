import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  auth: any;
}

const initialState: CounterState = {
  value: 0,
  auth: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getAuth: (state, action: any) => {
      state.auth = action.payload;
      state.value += 10;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getAuth, increment, decrement, incrementByAmount } =
  authSlice.actions;

export default authSlice.reducer;
