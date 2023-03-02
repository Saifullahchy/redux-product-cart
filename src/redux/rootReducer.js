import { combineReducers } from "redux";
import cartReducers from "./cart/cartReducers";
import productReducers from "./products/productReducers";

const rootReducer = combineReducers({
  products: productReducers,
  cart: cartReducers,
});

export default rootReducer;
