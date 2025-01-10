import { createStore } from 'redux';
import {reducers} from './Reducers/index'; // Import the reducer from src/Redux/Reducers/index.js

const store = createStore(reducer,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // Create a Redux store holding the state of your app.  
// Its API is { subscribe, dispatch, getState }.                    
// It's important to note that you'll only have a single store in a Redux application.  

export default store; // Export the store so that it can be used by the rest of the application.