import React, { Dispatch, FunctionComponent } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { toggleCartAction } from "../../redux/Reducers/Cart/CartAction";
import { selectCartTotalCount } from "../../redux/Reducers/Cart/CartSelector";
import { ReactComponent as ShoppingIcon } from "./../../assests/shopping-bag.svg";
import { createStructuredSelector } from "reselect";

import "./cart-icon-styles.scss";

type IProps = {
  toggleCartAction: typeof toggleCartAction;
  ItemCount: number;
};

const CartIcon: React.FC = (props: any) => (
  <div className="cart-icon" onClick={props.toggleCartAction}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{props.ItemCount}</span>
  </div>
);

const dispatchStateToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    toggleCartAction: () => dispatch(toggleCartAction()),
  };
};

const mapStateToProps = createStructuredSelector({
  ItemCount: selectCartTotalCount,
});

export default connect(mapStateToProps, dispatchStateToProps)(CartIcon);
