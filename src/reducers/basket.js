import { combineReducers } from "redux";
import {
  RECEIVE_PRODUCTS,
  UPDATE_TOTAL,
  REMOVE_PRODUCT,
} from "../constants/ActionTypes";

const products = (state, action) => {
  switch (action.type) {
    case UPDATE_TOTAL:
      return {
        ...state,
        inventory: state.inventory - 1,
        quantity: action.product.quantity,
      };
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.SKU] = product;
          return obj;
        }, {}),
      };

    default:
      const { product } = action;
      if (product && product.productSKU) {
        return {
          ...state,
          [product.productSKU]: products(state[product.productSKU], action),
        };
      }
      return state;
  }
};

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map((product) => product.SKU);
    case REMOVE_PRODUCT:
      return state.filter((product) => product !== action.productSKU);
    default:
      return state;
  }
};

export const getProduct = (state, id) => {
  return state.byId[id];
};

export const getVisibleProducts = (state) =>
  state.visibleIds.map((id) => getProduct(state, id));

export default combineReducers({
  byId,
  visibleIds,
});
