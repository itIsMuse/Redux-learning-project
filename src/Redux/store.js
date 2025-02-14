import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { reducers } from "./Reducers/index.js"; // Your existing combined reducers

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools only in development
});

export default store;
// import { configureStore } from "@reduxjs/toolkit";
// import {reducers} from './Reducers/index'; // Import the reducer from src/Redux/Reducers/index.js

// export const store = configureStore({
//     reducer: reducers, 
//     devTools: process.env.NODE_ENV !== "production", // Enables Redux DevTools only in development
//   });  


// export default store; 


