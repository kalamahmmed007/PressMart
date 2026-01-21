import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: JSON.parse(localStorage.getItem('cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const exists = state.items.find(item => item._id === action.payload._id);
      if (exists) {
        exists.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item._id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(item => item._id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('cart');
    },
    toggleWishlist: (state, action) => {
      const exists = state.wishlist.find(id => id === action.payload);
      if (exists) {
        state.wishlist = state.wishlist.filter(id => id !== action.payload);
      } else {
        state.wishlist.push(action.payload);
      }
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, toggleWishlist } = cartSlice.actions;
export default cartSlice.reducer;