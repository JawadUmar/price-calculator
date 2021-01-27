import { combineReducers } from "redux";
import products from "./basket";

export default combineReducers({
  products,
});

export const getTotal = (state) => {
  let total = 0;

  for (const key in state.products.byId) {
    const product = state.products.byId[key];
    if (product.quantity !== "" && product.quantity !== "0")
      total = total + product.price * product.quantity;
  }

  return total.toFixed(2);
};
