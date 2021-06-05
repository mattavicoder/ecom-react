import { combineReducers } from "redux";
import { UserReduxModel } from "./Models/UserReduxModel";
import { CartToggle } from "./Reducers/Cart/CartActionType";
import CartReducer from "./Reducers/Cart/CartReducer";
import UserReducer from "./Reducers/User/UserReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import DirectoryReducer from "./Reducers/Directory/DirectoryReducer";
import { ShopReducer } from "./Reducers/Shop/ShopReducer";

export interface ApplicationState {
  user: UserReduxModel;
  cart: CartToggle;
}
export type RootState = {
  userRedux: ReturnType<typeof UserReducer>;
  cartRedux: ReturnType<typeof CartReducer>;
  directoryRedux: ReturnType<typeof DirectoryReducer>;
  shopRedux: ReturnType<typeof ShopReducer>;
};

export const RootReducers = {
  userRedux: UserReducer,
  cartRedux: CartReducer,
  directoryRedux: DirectoryReducer,
  shopRedux: ShopReducer,
};

const reducers = combineReducers<RootState>({
  ...RootReducers,
});

const keyConfig = {
  key: "root",
  storage,
  whitelist: ["cartRedux"],
};

export default persistReducer(keyConfig, reducers);
