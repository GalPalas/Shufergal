import { combineReducers } from "redux";
import counterReducer from "store/slices/counterSlice";

export default combineReducers({
  counter: counterReducer,
});
