import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotalCostCount,
} from "../../redux/Reducers/Cart/CartSelector";
import { ShopItem } from "../../types/shopitems-type";
import CheckOutItem from "../checkout-item/checkout-item-component";

import "./check-out-component.scss";

type IProps = {
  cartItems: ShopItem[];
  total: number;
};

const CheckOut: FunctionComponent<IProps> = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((i) => (
        <CheckOutItem key={i.id} item={i} />
      ))}

      <div className="total">
        <span>Total: ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotalCostCount,
});

export default connect(mapStateToProps)(CheckOut);
