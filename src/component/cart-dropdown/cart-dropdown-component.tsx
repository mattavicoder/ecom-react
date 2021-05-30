import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { ShopItem } from "../../types/shopitems-type";
import { CustomButton } from "../button/button-component";
import CartItem from "../cart-item/cart-item-component";
import "./cart-dropdown-styles.scss";

type IProps = {
  CartItems: ShopItem[];
};

const CartDropDown: FunctionComponent<IProps> = ({ CartItems }) => {
  console.log(CartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {CartItems.map((i) => {
          <>
            <div>{i.name}</div>
            <CartItem key={i.id} {...i} />
          </>;
        })}
      </div>
      <CustomButton>Go To CheckOut</CustomButton>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { CartItems: state.cartRedux.CartItems };
};

export default connect(mapStateToProps)(CartDropDown);
