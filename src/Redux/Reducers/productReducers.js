

// Initial state
const initialState = {
    products: [],
    product: {},
    filteredProducts: []
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
                product: {}
            };
            case "SET_FILTERED_PRODUCTS":
      return {
        ...state,
        filteredProducts: payload, // Update filtered products
      };
        default:
            return state;
    }
};

export default productReducer;