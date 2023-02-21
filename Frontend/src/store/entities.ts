import { combineReducers } from "redux";
import cartReducer from "store/slices/cartSlice";
import userReducer from "store/slices/userSlice";
import orderReducer from "store/slices/orderSlice";

export default combineReducers({
  cart: cartReducer,
  user: userReducer,
  order: orderReducer,
});
