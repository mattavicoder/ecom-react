import React from "react";

import "./sign-in-styles.scss";
import { SignInType } from "./../../types/sign-in-sign-up";
import { FormInput } from "./../form-input/form-input-component";
import { CustomButton } from "../button/button-component";
import { auth, signInWithGoogle } from "./../../firebase/firebase-util";

export default class SignIn extends React.Component<{}, SignInType> {
  constructor(props: any) {
    super(props);

    this.state = { email: "", passWord: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (event: any) => {
    event.preventDefault();

    const { email, passWord } = this.state;

    try {
      const { user } = await auth.signInWithEmailAndPassword(email, passWord);
      this.setState({ email: "", passWord: "" });
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event: any) => {
    const { value, name } = event.target;

    if (name === "email") this.setState({ email: value });
    else this.setState({ passWord: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            type="passWord"
            name="passWord"
            label="Password"
            value={this.state.passWord}
            required
          />
          <div className="buttons">
            <CustomButton buttonType="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
              Sing In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
