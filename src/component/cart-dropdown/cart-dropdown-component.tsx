import React, { FunctionComponent } from "react";
import { connect, useDispatch } from "react-redux";
import { selectCartItems } from "../../redux/Reducers/Cart/CartSelector";
import { ShopItem } from "../../types/shopitems-type";
import { CustomButton } from "../button/button-component";
import CartItem from "../cart-item/cart-item-component";
import "./cart-dropdown-styles.scss";
import { createStructuredSelector } from "reselect";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { toggleCartAction } from "../../redux/Reducers/Cart/CartAction";

interface IProps extends RouteComponentProps {
  CartItems: ShopItem[];
}

const CartDropDown: FunctionComponent<IProps> = ({ CartItems, history }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {CartItems.length ? (
          CartItems.map((i) => {
            return <CartItem key={i.id} {...i}></CartItem>;
          })
        ) : (
          <span className="emptymessage">Your Cart is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartAction());
        }}
      >
        Go To CheckOut
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  CartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
