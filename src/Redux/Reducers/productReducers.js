

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
        case 'SELECTED_PRODUCT':
            return {
                ...state,
                product: payload
            };
        default:
            return state;
    }
};

export default productReducer;