import React, { FunctionComponent } from "react";
import { SignUp } from "../../component/sign-up/sign-up-component";

import SignIn from "./../../component/sign-in/sign-in";

import "./sign-in-and-sign-up-styles.scss";

export const SignInSignUp: FunctionComponent<{}> = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};
