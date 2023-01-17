import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { Product } from "types";

export interface CartState {
  cartItems: Product[];
}

const initialState: CartState = {
  cartItems: [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (cart: CartState, action) => {
      const newitem = action.payload;
      const existItem = cart.cartItems.find((item) => item._id === newitem._id);
      if (existItem) {
        cart.cartItems = cart.cartItems.map((item) =>
          item._id === existItem._id ? newitem : item
        );
      } else {
        cart.cartItems.push(newitem);
      }
    },
  },
});

// Returns the amount of items in the cart
export const cartValue = (state: RootState) =>
  state.entities.cart.cartItems.reduce(
    (acc: number, item: any) => acc + item.quantity,
    0
  );

export const cartState = (state: RootState) => state.entities.cart;

export const { addToCart } = counterSlice.actions;

export default counterSlice.reducer;
