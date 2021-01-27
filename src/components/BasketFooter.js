import React from "react";
import PropTypes from "prop-types";
import "./BasketFooter.scss";

const BasketFooter = ({ total, onCheckoutClicked, onClearClicked }) => {
  const hasProducts = total > 0;

  return (
    <div className="footer">
      <div className="total">£{total}</div>
      <div>
        <button
          onClick={onClearClicked}
          className="button-clear"
          disabled={hasProducts ? "" : "disabled"}
        >
          Clear
        </button>
      </div>
      <div>
        <button
          onClick={onCheckoutClicked}
          className="button-checkout"
          disabled={hasProducts ? "" : "disabled"}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

BasketFooter.propTypes = {
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
  onClearClicked: PropTypes.func,
};

export default BasketFooter;
