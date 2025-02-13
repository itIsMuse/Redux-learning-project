import { createStore } from 'redux';
import {reducers} from './Reducers/index'; // Import the reducer from src/Redux/Reducers/index.js

const store = createStore(reducers,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // Create a Redux store holding the state of your app.  
// Its API is { subscribe, dispatch, getState }.                    
// It's important to note that you'll only have a single store in a Redux application.  

export default store; // Export the store so that it can be used by the rest of the application.


// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice";
// import { reducers } from "./Reducers/index"; // Your existing combined reducers

// export const store = configureStore({
//   reducer: {
//     ...reducers, // Include all your existing reducers
//     cart: cartReducer, // Add the cart slice reducer
//   },
//   devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools only in development
// });

// export default store;

// compare this snippet from src/Redux/Actions/productAction.js: