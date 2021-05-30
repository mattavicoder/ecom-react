import { cartActionReducers } from "./CartAction";

export const CartActionType = {
  TOGGLE_CART_HIDDEN: "TOGGLE_CART_HIDDEN",
  ADD_ITEM: "ADD_ITEM",
};

export type CartToggle = {
  Hidden: boolean;
  CartItems: any;
};

export type CartProps = {
  CartItems?: any;
  Hidden?: boolean;
  cartAddItem: typeof cartActionReducers.cartAddItem;
  toggleCartAction: typeof cartActionReducers.toggleCartAction;
};
