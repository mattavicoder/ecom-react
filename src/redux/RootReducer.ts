import { combineReducers } from "redux";
import { UserReduxModel } from "./Models/UserReduxModel";
import { CartToggle } from "./Reducers/Cart/CartActionType";
import CartReducer from "./Reducers/Cart/CartReducer";
import UserReducer from "./Reducers/User/UserReducer";

export interface ApplicationState {
  user: UserReduxModel;
  cart: CartToggle;
}
export type RootState = {
  userRedux: ReturnType<typeof UserReducer>;
  cartRedux: ReturnType<typeof CartReducer>;
};

export const RootReducers = {
  userRedux: UserReducer,
  cartRedux: CartReducer,
};

export default combineReducers<RootState>({
  ...RootReducers,
});
