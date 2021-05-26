import { combineReducers, Reducer } from "redux";
import { UserReduxModel } from "../Models/UserReduxModel";

const Initial_State: UserReduxModel = {
  UserName: "",
  Email: "",
};

const UserReducer: Reducer<UserReduxModel> = (
  currentState = Initial_State,
  action: any
) => {
  switch (action.type) {
    case "Set_Current_User":
      return {
        ...action.PayLoad,
      };
    default:
      return currentState;
  }
};

export default UserReducer;
