import { CartActionType } from "./CartActionType";

export const cartActionReducers = {
  toggleCartAction: () => ({
    type: CartActionType.TOGGLE_CART_HIDDEN,
  }),

  cartAddItem: (item: any) => ({
    type: CartActionType.ADD_ITEM,
    payLoad: item,
  }),
};

export const toggleCartAction = () => ({
  type: CartActionType.TOGGLE_CART_HIDDEN,
});

export const cartAddItem = (item: any) => ({
  type: CartActionType.ADD_ITEM,
  payLoad: item,
});
