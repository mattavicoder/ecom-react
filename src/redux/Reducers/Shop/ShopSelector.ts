import { createSelector } from "reselect";

const shopState = (state: any) => state;

export const getShopCollections = createSelector(
  [shopState],
  (data) => data.shopRedux
);
