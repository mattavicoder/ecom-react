import { combineReducers, Reducer } from "redux";
import { UserReduxModel } from "../../Models/UserReduxModel";
import { UserActionTypes } from "./UserActionTypes";

const Initial_State: UserReduxModel = {
  UserName: "",
  Email: "",
};

const UserReducer: Reducer<UserReduxModel> = (
  currentState = Initial_State,
  action: any
) => {
  switch (action.type) {
    case UserActionTypes.Set_Current_User:
      return {
        ...action.PayLoad,
      };
    default:
      return currentState;
  }
};

export default UserReducer;
