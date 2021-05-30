import { Reducer } from "redux";
import { CartToggle, CartActionType } from "./CartActionType";
import { cartAddQuantity, removeItem } from "./CartAction";

const Initial_State: CartToggle = {
  Hidden: true,
  CartItems: [],
};

const CartReducer: Reducer<CartToggle> = (
  state = Initial_State,
  action: any
) => {
  switch (action.type) {
    case CartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        Hidden: !state.Hidden,
      };
    case CartActionType.ADD_ITEM:
      return {
        ...state,
        CartItems: [...cartAddQuantity(state.CartItems, action.payLoad)],
      };
    case CartActionType.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        CartItems: state.CartItems.filter((i) => i.id !== action.payLoad.id),
      };
    case CartActionType.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        CartItems: [...removeItem(state.CartItems, action.payload)],
      };
    default:
      return state;
  }
};

export default CartReducer;
