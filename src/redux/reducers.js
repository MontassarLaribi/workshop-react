import { combineReducers } from "redux";

import cart from "./slices/cartSlice";
import products from "./slices/productsSlice";

const reducers = combineReducers({
  products,
  cart,
});

export default reducers;
