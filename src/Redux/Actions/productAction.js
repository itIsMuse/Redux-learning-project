import { ActionTypes } from "../constants/action-types.js";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
}

export const selectedProduct = (product) => {    
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    };

    
}

export const setFilteredProducts = (filteredProducts) => {
    return {
      type: "SET_FILTERED_PRODUCTS",
      payload: filteredProducts,
    };
  };


