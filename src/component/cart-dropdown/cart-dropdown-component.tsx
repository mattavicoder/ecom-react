import React from "react";
import { CustomButton } from "../button/button-component";
import "./cart-dropdown-styles.scss";

export const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>Go To CheckOut</CustomButton>
  </div>
);
