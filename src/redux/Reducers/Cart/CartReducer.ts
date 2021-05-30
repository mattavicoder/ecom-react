import { Reducer } from "redux";
import { CartToggle, CartActionType } from "./CartActionType";
import { cartAddQuantity } from "./CartAction";

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
    case CartActionType.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        CartItems: state.CartItems.filter((i) => i.id !== action.payLoad.id),
      };
    default:
      return state;
  }
};

export default CartReducer;
