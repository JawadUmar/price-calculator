import reducer, * as basket from "../basket";

describe("reducers", () => {
  describe("basket", () => {
    let state;

    describe("when products are received", () => {
      beforeEach(() => {
        state = reducer(
          {},
          {
            type: "RECEIVE_PRODUCTS",
            products: [
              {
                name: "Toilet Roll",
                SKU: 1298443,
                price: 1.3,
                currency: "£",
                metadata: {
                  category: "toiletries",
                },
                inventory: 3,
              },
              {
                name: "Pasta",
                SKU: 283791,
                price: 0.58,
                currency: "£",
                metadata: {
                  category: "food",
                },
                inventory: 3,
              },
            ],
          }
        );
      });

      it("contains the products from the action", () => {
        expect(basket.getProduct(state, 1298443)).toEqual({
          name: "Toilet Roll",
          SKU: 1298443,
          price: 1.3,
          currency: "£",
          metadata: {
            category: "toiletries",
          },
          inventory: 3,
        });
        expect(basket.getProduct(state, 283791)).toEqual({
          name: "Pasta",
          SKU: 283791,
          price: 0.58,
          currency: "£",
          metadata: {
            category: "food",
          },
          inventory: 3,
        });
      });

      it("contains no other products", () => {
        expect(basket.getProduct(state, 9999)).toEqual(undefined);
      });

      it("lists all of the products as visible", () => {
        expect(basket.getVisibleProducts(state)).toEqual([
          {
            name: "Toilet Roll",
            SKU: 1298443,
            price: 1.3,
            currency: "£",
            metadata: {
              category: "toiletries",
            },
            inventory: 3,
          },
          {
            name: "Pasta",
            SKU: 283791,
            price: 0.58,
            currency: "£",
            metadata: {
              category: "food",
            },
            inventory: 3,
          },
        ]);
      });
    });
  });
});
