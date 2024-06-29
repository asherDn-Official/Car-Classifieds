import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productsReducer from "./slicers/productsSlice";
import productReducer from "./slicers/productslice";
import authReducer from "./slicers/authSlice";
import cartReducer from "./slicers/cartSlice";
import orderReducer from "./slicers/orderSlice";
import userReducer from "./slicers/userSlice";
import wishListReducer from "./slicers/wishListSlice";

const reducer = combineReducers({
  productsState: productsReducer,
  productState: productReducer,
  authState: authReducer,
  cartState: cartReducer,
  orderState: orderReducer,
  userState: userReducer,
  wishListState: wishListReducer,
});

const store = configureStore({
  reducer,
  // middlewarev: [thunk],
  middleware: [thunk],
});

export default store;
