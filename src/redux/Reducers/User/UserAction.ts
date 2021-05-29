import { UserReduxModel } from "../../Models/UserReduxModel";
import { UserActionTypes } from "./UserActionTypes";

export const setCurrentUser = (user: UserReduxModel) => ({
  type: UserActionTypes.Set_Current_User,
  PayLoad: user,
});
