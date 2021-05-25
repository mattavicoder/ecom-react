import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase-util";
import { authUser } from "../../types/auth";
import { ReactComponent as Logo } from "./../../assests/crown.svg";
import "./header-styles.scss";

const Header: FunctionComponent<authUser> = ({ userName }) => {
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

        {userName ? (
          <div className="option" onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT{" "}
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToPros = (state: any) => {
  console.log(state);
  return {
    userName: state.userRedux.currentUser,
  };
};

export default connect(mapStateToPros)(Header);
