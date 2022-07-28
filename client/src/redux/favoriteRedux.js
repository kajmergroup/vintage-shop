import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    products: [],
    quantity: 0,
  },
  reducers: {
    addFavorite: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
    },
    deleteFavorite: (state, action) => {
      const newFavorite = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.products = newFavorite;
      state.quantity -= 1;
    },
  },
});


export const {addFavorite , deleteFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;