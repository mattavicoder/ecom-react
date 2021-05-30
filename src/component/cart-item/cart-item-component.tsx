import React from "react";
import { ShopItem } from "../../types/shopitems-type";

import "./cart-item-component.scss";

const CartItem: React.FC<ShopItem> = (item) => {
  console.log(item);
  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt="item"></img>
      <div className="item-details">
        <span className="name">{item.name}</span>
        <span className="price">${item.price * (item.quantity || 1)}</span>
      </div>
    </div>
  );
};

export default CartItem;
