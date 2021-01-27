import { getTotal } from "../index";

describe("selectors", () => {
  describe("getTotal", () => {
    it("should return price total", () => {
      const state = {
        products: {
          byId: {
            1: {
              id: 1,
              price: 1.99,
              quantity: "2",
            },
            2: {
              id: 1,
              price: 4.99,
              quantity: "1",
            },
            3: {
              id: 1,
              price: 9.99,
              quantity: "0",
            },
          },
        },
      };
      expect(getTotal(state)).toBe("8.97");
    });
  });
});
