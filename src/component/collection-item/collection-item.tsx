import React, { Dispatch, FunctionComponent } from "react";
import "./collection-item.scss";

import { ShopItem } from "./../../types/shopitems-type";
import { CustomButton } from "../button/button-component";
import { connect } from "react-redux";
import { cartActionReducers } from "../../redux/Reducers/Cart/CartAction";
import { CartProps } from "../../redux/Reducers/Cart/CartActionType";

const CollectionItem: FunctionComponent<CartProps> = ({
  CartItems,
  cartAddItem,
}) => {
  const { imageUrl, name, price } = CartItems;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted={true} onClick={() => cartAddItem(CartItems)}>
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    cartAddItem: (item: any) => dispatch(cartActionReducers.cartAddItem(item)),
    toggleCartAction: () => dispatch(cartActionReducers.toggleCartAction()),
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
