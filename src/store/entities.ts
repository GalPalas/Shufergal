import { combineReducers } from "redux";
import counterReducer from "store/slices/counterSlice";
import cartReducer from "store/slices/cartSlice";

export default combineReducers({
  counter: counterReducer,
  cart: cartReducer,
});
