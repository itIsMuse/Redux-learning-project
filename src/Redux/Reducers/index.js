import { combineReducers } from "redux";
import productReducer from "./productReducers";
import userReducer from "./userReducers";
import { use } from "react";
import cartSlice from "../cartSlice";

export const reducers = combineReducers({
    allProducts: productReducer,
    user: userReducer,  // Add the user reducer to the combined reducers
    cart: cartSlice
    
})