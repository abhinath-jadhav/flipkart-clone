import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CartItem {
  productId: string;
  quantity: number;
}
const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [] as CartItem[],
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { productId, quantity } = action.payload;
      const existingItem = state.find((item) => item.productId === productId);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.push({ productId, quantity });
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
