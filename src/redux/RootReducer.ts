import { combineReducers } from "redux";
import { UserReduxModel } from "./Models/UserReduxModel";
import UserReducer from "./Reducers/UserReducer";

export interface ApplicationState {
  user: UserReduxModel;
}
export type RootState = {
  userRedux: ReturnType<typeof UserReducer>;
};

export const RootReducers = {
  userRedux: UserReducer,
};

export default combineReducers<RootState>({
  ...RootReducers,
});
