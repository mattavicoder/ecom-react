import { createSelector } from "reselect";
import { ShopItem } from "../../../types/shopitems-type";

const selectCart = (state: any) => state.cartRedux;

export const selectCartToggle = createSelector(
  [selectCart],
  (cartRedux) => cartRedux.Hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cartRedux) => cartRedux.CartItems
);

export const selectCartTotalCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulation: number, item: ShopItem) =>
        accumulation + (item.quantity || 0),
      0
    )
);

export const selectCartTotalCostCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulation: number, item: ShopItem) =>
        accumulation + (item.quantity || 0) * item.price,
      0
    )
);
