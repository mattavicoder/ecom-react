import { Reducer } from "redux";
import { ShopCategory } from "../../../types/shopitems-type";
import { SHOP_DATA } from "../Directory/shop-data";

const INITIAL_STATE = SHOP_DATA;

export const ShopReducer: Reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
