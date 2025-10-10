import { createSlice } from "@reduxjs/toolkit";

const find_item = (items, productId) => {
  return items.find((item) => item.productId === productId);
};

const filter_item = (items, productId) => {
  return items.filter((item) => item.productId !== productId);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = find_item(state.items, action.payload.productId);
      if (item) item.quantity += 1;
      else state.items.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart: (state, action) => {
      state.items = filter_item(state.items, action.payload);
    },
    increaseQty: (state, action) => {
      const item = find_item(state.items, action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQty: (state, action) => {
      const item = find_item(state.items, action.payload);
      if (item) {
        if (item.quantity > 1) item.quantity -= 1;
        else state.items = filter_item(state.items, action.payload);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export const getCartItems = (state) => state.cart.items;

export default cartSlice.reducer;
