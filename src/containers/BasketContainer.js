import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  updateTotal,
  removeProduct,
  checkout,
  clearQuantities,
} from "../actions";
import { getVisibleProducts } from "../reducers/basket";
import { getTotal } from "../reducers";
import BasketItem from "../components/BasketItem";
import BasketFooter from "../components/BasketFooter";
import "./BasketContainer.scss";

const BasketContainer = ({
  products,
  total,
  updateTotal,
  removeProduct,
  checkout,
  clearQuantities,
}) => (
  <div>
    <div>
      {products.length > 0 ? (
        products.map((product) => (
          <BasketItem
            key={product.SKU}
            product={product}
            onQuantityChange={(quantity) => updateTotal(product.SKU, quantity)}
            onRemoveProductClicked={() => removeProduct(product.SKU)}
          />
        ))
      ) : (
        <div className="empty-basket">There are no items in the basket</div>
      )}
    </div>

    {products.length > 0 && (
      <BasketFooter
        products={products}
        total={total}
        onCheckoutClicked={() => checkout(products)}
        onClearClicked={() => clearQuantities()}
      />
    )}
  </div>
);

BasketContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      SKU: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      quantity: PropTypes.string.isRequired,
      inventory: PropTypes.number.isRequired,
    })
  ).isRequired,
  total: PropTypes.string,
  updateTotal: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  checkout: PropTypes.func.isRequired,
  clearQuantities: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: getVisibleProducts(state.products),
  total: getTotal(state),
});

export default connect(mapStateToProps, {
  updateTotal,
  removeProduct,
  checkout,
  clearQuantities,
})(BasketContainer);
