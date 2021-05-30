import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase-util";
import CartDropDown from "../cart-dropdown/cart-dropdown-component";
import CartIcon from "../cart-icon/cart-icon-component";
import { ReactComponent as Logo } from "./../../assests/crown.svg";
import "./header-styles.scss";

type IProps = {
  UserName: string;
  Hidden: boolean;
};

const Header: FunctionComponent<IProps> = ({ UserName, Hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo"></Logo>
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>

        {UserName && UserName !== "" ? (
          <div className="option" onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT{" "}
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}

        <CartIcon />
      </div>
      {Hidden ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToPros = (state: any) => {
  return {
    UserName: state.userRedux.UserName,
    Hidden: state.cartRedux.Hidden,
  };
};

export default connect(mapStateToPros)(Header);
