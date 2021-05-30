import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import {
  cartAddItem,
  clearItemFromCart,
  removeItemFromCart,
} from "../../redux/Reducers/Cart/CartAction";
import { ShopItem } from "../../types/shopitems-type";

import "./checkout-item-component.scss";

type IProps = {
  item: ShopItem;
  removeCartItem: typeof removeItemFromCart;
  clearCartItem: typeof clearItemFromCart;
  addItem: typeof cartAddItem;
};

const CheckOutItem: FunctionComponent<IProps> = ({
  item,
  removeCartItem,
  clearCartItem,
  addItem,
}) => {
  const { name, imageUrl, quantity, price } = item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeCartItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearCartItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const maspDispatchToProps = (dispatch: any) => ({
  removeCartItem: (item: ShopItem) => dispatch(removeItemFromCart(item)),
  clearCartItem: (item: ShopItem) => dispatch(clearItemFromCart(item)),
  addItem: (item: ShopItem) => dispatch(cartAddItem(item)),
});

export default connect(null, maspDispatchToProps)(CheckOutItem);
