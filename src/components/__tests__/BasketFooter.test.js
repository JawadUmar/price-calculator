import React from "react";
import { shallow } from "enzyme";
import BasketFooter from "../BasketFooter";

const setup = (total) => {
  const actions = {
    onCheckoutClicked: jest.fn(),
    onClearClicked: jest.fn(),
  };

  const component = shallow(<BasketFooter total={total} {...actions} />);

  return {
    component: component,
    actions: actions,
    buttonCheckout: component.find("button.button-checkout"),
    buttonClear: component.find("button.button-clear"),
    totalP: component.find("div.total"),
  };
};

describe("BasketFooter component", () => {
  it("should display total", () => {
    const { totalP } = setup("76");
    expect(totalP.text()).toMatch("£76");
  });

  it("should disable buttons", () => {
    const { buttonCheckout, buttonClear } = setup();
    expect(buttonCheckout.prop("disabled")).toEqual("disabled");
    expect(buttonClear.prop("disabled")).toEqual("disabled");
  });
});
