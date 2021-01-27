import React from "react";
import { shallow } from "enzyme";
import BasketItem from "../BasketItem";

const setup = (product) => {
  const actions = {
    onQuantityChange: jest.fn(),
    onRemoveProductClicked: jest.fn(),
  };

  const component = shallow(<BasketItem product={product} {...actions} />);

  return {
    component: component,
    actions: actions,
    buttonRemove: component.find("button.button-remove"),
    quantityInput: component.find("input.quantity-input"),
    product: component.find("div.product"),
  };
};

let productProps;

describe("BasketItem component", () => {
  beforeEach(() => {
    productProps = {
      name: "Pasta",
      SKU: 283791,
      price: 0.58,
      currency: "£",
      metadata: {
        category: "food",
      },
      inventory: 3,
      quantity: "5.66",
    };
  });

  it("should call action on remove button click", () => {
    const { buttonRemove, actions } = setup(productProps);
    buttonRemove.simulate("click");
    expect(actions.onRemoveProductClicked).toBeCalled();
  });

  it("should call action on quantity change", () => {
    const { quantityInput, actions } = setup(productProps);
    quantityInput.simulate("change", { target: { value: "2.88" } });
    expect(actions.onQuantityChange).toBeCalled();
  });
});
