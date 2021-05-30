import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/Reducers/Cart/CartAction";
import { ShopItem } from "../../types/shopitems-type";

import "./checkout-item-component.scss";

type IProps = {
  item: ShopItem;
  clearCartItem: typeof clearItemFromCart;
};

const CheckOutItem: FunctionComponent<IProps> = ({ item, clearCartItem }) => {
  const { name, imageUrl, quantity, price } = item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearCartItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const maspDispatchToProps = (dispatch: any) => ({
  clearCartItem: (item: ShopItem) => dispatch(clearItemFromCart(item)),
});

export default connect(null, maspDispatchToProps)(CheckOutItem);
