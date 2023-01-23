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
    removeItemFromCart: (cart: CartState, action) => {
      const removeItem = cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      cart.cartItems = removeItem;
    },
    incrementQuantity: (cart, action) => {
      const item = cart.cartItems.find((item) => item._id === action.payload)!;
      item.quantity!++;
    },
    decrementQuantity: (cart, action) => {
      const item = cart.cartItems.find((item) => item._id === action.payload)!;
      if (item.quantity! < 1) {
        item.quantity = 0;
      } else {
        item.quantity!--;
      }
    },
  },
});

export const cartState = (state: RootState) => state.entities.cart;

// Returns the amount of items in the cart
export const cartValue = (state: RootState) =>
  state.entities.cart.cartItems.reduce(
    (acc: number, item: Product) => acc + item.quantity!,
    0
  );

export const {
  addToCart,
  removeItemFromCart,
  incrementQuantity,
  decrementQuantity,
} = counterSlice.actions;

export default counterSlice.reducer;
