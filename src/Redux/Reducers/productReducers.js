

// Initial state
const initialState = {
    products: [{
        id : 1,
        title: "Product 1",
        category: "Category 1"
    }],
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