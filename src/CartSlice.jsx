import { createSlice } from '@reduxjs/toolkit';
import { productsById } from './products';

// One cart entry per unique plant. Quantity is always a positive integer.
const initialState = { items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const id = action.payload;
      if (!productsById[id]) return;
      const existing = state.items.find((item) => item.id === id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ id, quantity: 1 });
      }
    },
    increaseQuantity(state, action) {
      const item = state.items.find((entry) => entry.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((entry) => entry.id === action.payload);
      if (!item) return;
      if (item.quantity === 1) {
        state.items = state.items.filter((entry) => entry.id !== action.payload);
      } else {
        item.quantity -= 1;
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((entry) => entry.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, increaseQuantity, decreaseQuantity, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + productsById[item.id].price * item.quantity, 0);
