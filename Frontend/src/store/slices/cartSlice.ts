import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { Product, ShippingAddress } from "types";

export interface CartState {
  cartItems: Product[];
  shippingAddress: ShippingAddress;
}

const initialState: CartState = {
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")!)
    : [],
  shippingAddress: {
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  },
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
      localStorage.setItem("cart", JSON.stringify(cart.cartItems));
    },
    removeItemFromCart: (cart: CartState, action) => {
      const removeItem = cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      cart.cartItems = removeItem;
      localStorage.setItem("cart", JSON.stringify(cart.cartItems));
    },
    incrementQuantity: (cart, action) => {
      const item = cart.cartItems.find((item) => item._id === action.payload)!;
      item.quantity!++;
      localStorage.setItem("cart", JSON.stringify(cart.cartItems));
    },
    decrementQuantity: (cart, action) => {
      const item = cart.cartItems.find((item) => item._id === action.payload)!;
      if (item.quantity! < 1) {
        item.quantity = 0;
      } else {
        item.quantity!--;
      }
      localStorage.setItem("cart", JSON.stringify(cart.cartItems));
    },
    resetCart: (cart, action) => {
      cart.cartItems = [];
      cart.shippingAddress = {
        fullName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
      };
      localStorage.removeItem("cart");
    },
    saveShippingAddress: (cart, action) => {
      cart.shippingAddress = action.payload;
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
  resetCart,
  saveShippingAddress,
} = counterSlice.actions;

export default counterSlice.reducer;
