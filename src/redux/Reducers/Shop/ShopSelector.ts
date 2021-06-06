import { createSelector } from "reselect";

const shopState = (state: any) => state;

export const getShopCollections = createSelector(
  [shopState],
  (data) => data.shopRedux
);

export const getCollectionsForPreview = createSelector(
  [getShopCollections],
  (collections) => Object.keys(collections).map((k) => collections[k])
);

export const getCategoryCollections = (categoryParam: string) =>
  createSelector(
    [getShopCollections],
    (collections) => collections[categoryParam]
  );
