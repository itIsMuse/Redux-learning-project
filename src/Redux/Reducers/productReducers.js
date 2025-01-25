

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
        case 'REMOVE_SELECTED_PRODUCT':
            return {
                ...state,
            }
        default:
            return state;
    }
};

export default productReducer;