import { combineReducers } from "redux";
import cartReducer from "store/slices/cartSlice";
import userReducer from "store/slices/userSlice";

export default combineReducers({
  cart: cartReducer,
  user: userReducer,
});
