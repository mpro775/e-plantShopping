import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import { productsById } from './products';

const STORAGE_KEY = 'paradise-nursery-cart';

function loadCart() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
    if (!Array.isArray(stored)) return [];
    const seen = new Set();
    return stored.filter((entry) => {
      if (
        !entry ||
        typeof entry.id !== 'string' ||
        !productsById[entry.id] ||
        !Number.isSafeInteger(entry.quantity) ||
        entry.quantity < 1 ||
        seen.has(entry.id)
      ) return false;
      seen.add(entry.id);
      return true;
    }).map(({ id, quantity }) => ({ id, quantity }));
  } catch {
    return [];
  }
}

export const store = configureStore({
  reducer: { cart: cartReducer },
  preloadedState: { cart: { items: loadCart() } },
});

// Subscribe once: cart stays intact on refresh or while switching pages.
store.subscribe(() => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState().cart.items));
  } catch {
    // Browsers can block localStorage; cart still works in memory.
  }
});
