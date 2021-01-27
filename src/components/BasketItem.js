import React from "react";
import PropTypes from "prop-types";
import "./BasketItem.scss";

const itemPrice = (quantity, price) => (quantity * price).toFixed(2);

const BasketItem = ({ product, onQuantityChange, onRemoveProductClicked }) => (
  <div className="product">
    <div>{product.name}</div>
    <div>
      <input
        type="number"
        min="0"
        max="99"
        value={product.quantity}
        onChange={(e) => onQuantityChange(e.target.value)}
        className="quantity-input"
      />
    </div>
    <div className="item-price">
      {product.currency}
      {itemPrice(product.quantity, product.price)}
    </div>
    <div>
      <button className="button-remove" onClick={onRemoveProductClicked}>
        X
      </button>
    </div>
  </div>
);

BasketItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    SKU: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    inventory: PropTypes.number.isRequired,
  }).isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

export default BasketItem;
