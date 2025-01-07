import { createSlice } from "@reduxjs/toolkit";

createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const isExistingItem = state.items.find((item) => item.id === item.id);
      if (!isExistingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        isExistingItem.quantity++;
        isExistingItem.totalPrice = isExistingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart() {},
  },
});
