import { CartActionType } from "./CartActionType";

export const toggleCartAction = () => ({
  type: CartActionType.TOGGLE_CART_HIDDEN,
});
