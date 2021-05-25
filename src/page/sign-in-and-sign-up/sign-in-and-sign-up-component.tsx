import React, { FunctionComponent } from "react";

import SignIn from "./../../component/sign-in/sign-in";

//import './sign-in-and-sign-up-styles.scss'

export const SignInSignUp: FunctionComponent<{}> = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
    </div>
  );
};
