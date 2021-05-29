import React, { Dispatch, FunctionComponent } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { toggleCartAction } from "../../redux/Reducers/Cart/CartAction";
import { ReactComponent as ShoppingIcon } from "./../../assests/shopping-bag.svg";

import "./cart-icon-styles.scss";

type IProps = {
  toggleCartAction: typeof toggleCartAction;
};

const CartIcon: React.FC = (props: any) => (
  <div className="cart-icon" onClick={props.toggleCartAction}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const dispatchStateToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    toggleCartAction: () => dispatch(toggleCartAction()),
  };
};

export default connect(null, dispatchStateToProps)(CartIcon);
