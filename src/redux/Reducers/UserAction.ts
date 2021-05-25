import { UserReduxModel } from "../Models/UserReduxModel";
import { ApplicationState } from "../RootReducer";

export const setCurrentUser = (user: UserReduxModel) => ({
  type: "Set_Current_User",
  PayLoad: user,
});
