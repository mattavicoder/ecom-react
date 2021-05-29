import { Reducer } from "redux";
import { CartToggle, CartActionType } from "./CartActionType";

const Initial_State: CartToggle = {
  Hidden: false,
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
    default:
      return state;
  }
};

export default CartReducer;
