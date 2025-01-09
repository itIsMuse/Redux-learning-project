// productReducers.js

// Initial state
const initialState = {
    products: [],
    selectedProduct: null
};

// Reducer function
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case 'SELECT_PRODUCT':
            return {
                ...state,
                selectedProduct: action.payload
            };
        default:
            return state;
    }
};

export default productReducer;