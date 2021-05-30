import React, { FunctionComponent } from "react";
import { ShopItem } from "../../types/shopitems-type";

import "./checkout-item-component.scss";

type IProps = {
  item: ShopItem;
};

const CheckOutItem: FunctionComponent<IProps> = ({
  item: { name, imageUrl, quantity, price },
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="item" src={imageUrl} />
    </div>

    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CheckOutItem;
