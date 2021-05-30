import { createSelector } from "reselect";

const selectUser = (state: any) => state.userRedux;

export const selectCurrentUserName = createSelector(
  [selectUser],
  (userRedux) => userRedux.UserName
);
