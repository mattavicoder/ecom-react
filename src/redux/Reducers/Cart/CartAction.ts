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
  type: CartActionType.CLEAR_ITEM_FROM_CART,
  payLoad: item,
});

export const removeItemFromCart = (item: ShopItem) => ({
  type: CartActionType.REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const cartAddQuantity = (
  existingItems: ShopItem[],
  newItem: ShopItem
) => {
  let itemExists = existingItems?.find((i) => i.id === newItem.id);
  if (itemExists) {
    return existingItems.map((i) =>
      i.id === newItem.id ? { ...i, quantity: (i.quantity || 0) + 1 } : i
    );
  }

  return [...existingItems, { ...newItem, quantity: 1 }];
};

export const removeItem = (existingItems: ShopItem[], newItem: ShopItem) => {
  let itemExists = existingItems?.find((i) => i.id === newItem.id);

  if ((itemExists?.quantity || 1) === 1) {
    return existingItems.filter((i) => i.id !== newItem.id);
  }

  return existingItems.map((i) =>
    i.id === newItem.id ? { ...i, quantity: (i.quantity || 1) - 1 } : i
  );
};
