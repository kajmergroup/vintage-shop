import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteProduct: (state, action) => {
      const newCart = state.products.filter(
        product => product._id !== action.payload._id
      )
      state.products = newCart;
      state.quantity -= 1;
      state.total = state.total -(action.payload.price * action.payload.quantity);
    }
  },
});

export const { addProduct ,deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;