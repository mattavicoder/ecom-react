import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/Reducers/Cart/CartSelector";
import { ShopItem } from "../../types/shopitems-type";
import { CustomButton } from "../button/button-component";
import CartItem from "../cart-item/cart-item-component";
import "./cart-dropdown-styles.scss";

type IProps = {
  CartItems: ShopItem[];
};

const CartDropDown: FunctionComponent<IProps> = ({ CartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {CartItems.map((i) => {
          return <CartItem key={i.id} {...i}></CartItem>;
        })}
      </div>
      <CustomButton>Go To CheckOut</CustomButton>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { CartItems: selectCartItems(state) };
};

export default connect(mapStateToProps)(CartDropDown);
