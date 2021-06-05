import { createSelector } from "reselect";

const primaryDirectorySelector = (state: any) => state;

export const getDirectoriesSelector = createSelector(
  [primaryDirectorySelector],
  (data) => data.directoryRedux
);
