import axios from "axios";
import * as types from "../constants/ActionTypes";

export const receiveProducts = (products) => ({
  type: types.RECEIVE_PRODUCTS,
  products,
});

export const getAllProducts = () => (dispatch) => {
  axios.get("/api_data/products.json").then((products) => {
    products.data.map((p) => (p.quantity = "0"));
    dispatch(receiveProducts(products.data));
  });
};

const updateTotalDispatch = (productSKU, quantity) => ({
  type: types.UPDATE_TOTAL,
  product: { productSKU, quantity },
});

export const updateTotal = (productSKU, quantity) => (dispatch, getState) => {
  dispatch(updateTotalDispatch(productSKU, quantity));
};

export const removeProduct = (productSKU) => (dispatch, getState) => {
  dispatch({
    type: types.REMOVE_PRODUCT,
    productSKU,
  });

  dispatch(updateTotalDispatch(productSKU, "0"));
};

export const clearQuantities = () => (dispatch, getState) => {
  const currentState = getState();

  const products = currentState.products.visibleIds.map((id) => {
    const product = currentState.products.byId[id];
    product.quantity = "0";
    return product;
  });

  dispatch(receiveProducts(products));
};

export const checkout = (products) => (dispatch, getState) => {
  dispatch({
    type: types.CHECKOUT_REQUEST,
  });
};
