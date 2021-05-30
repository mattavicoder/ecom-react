import { ShopItem } from "../../../types/shopitems-type";
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

export const clearItemFromCart = (item: ShopItem) => ({
  type: CartActionType.REMOVE_ITEM_FROM_CART,
  payLoad: item,
});

export const cartAddQuantity = (
  existingItems: ShopItem[],
  newItem: ShopItem
) => {
  let itemExists = existingItems?.findIndex((i) => i.id === newItem.id);
  if (itemExists > -1) {
    existingItems[itemExists].quantity =
      (existingItems[itemExists].quantity || 0) + 1;
  } else {
    existingItems.push({ ...newItem, quantity: 1 });
  }
  return existingItems;
};
