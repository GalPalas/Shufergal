import { combineReducers } from "redux";
import counterReducer from "store/slices/counterSlice";
import cartReducer from "store/slices/cartSlice";
import userReducer from "store/slices/userSlice";

export default combineReducers({
  counter: counterReducer,
  cart: cartReducer,
  user: userReducer,
});
