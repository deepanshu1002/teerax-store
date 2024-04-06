import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      state.items = state.items.filter((i) => i !== action.payload);
    },
  },
});
export default cart.reducer;
export const { addToCart, deleteFromCart } = cart.actions;
