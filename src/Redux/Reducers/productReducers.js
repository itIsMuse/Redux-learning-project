

// Initial state
const initialState = {
    products: [],
    product: {}
};

// Reducer function
const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: [...state.products, payload]
            };
        case 'SELECT_PRODUCT':
            return {
                ...state,
                selectedProduct: payload
            };
        default:
            return state;
    }
};

export default productReducer;