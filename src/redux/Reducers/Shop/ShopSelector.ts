import { createSelector } from "reselect";

const shopCategoryEnum: { [key: string]: number } = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const shopState = (state: any) => state;

export const getShopCollections = createSelector(
  [shopState],
  (data) => data.shopRedux
);

export const getCategoryCollections = (categoryParam: string) =>
  createSelector([getShopCollections], (collections) =>
    collections.find(
      (c: { id: number }) => c.id === shopCategoryEnum[categoryParam]
    )
  );
