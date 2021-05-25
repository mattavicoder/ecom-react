import React from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase-util";
import { authUser } from "../../types/auth";
import { CustomButton } from "../button/button-component";
import { FormInput } from "../form-input/form-input-component";

import "./sign-up-styles.scss";

export class SignUp extends React.Component<{}, authUser> {
  constructor(props: any) {
    super(props);

    this.state = {
      userName: "",
      userAuth: {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (event: any) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } =
      this.state.userAuth;

    if (password !== confirmPassword) {
      alert("passwords dont match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, displayName);

      this.state = {
        userName: "",
        userAuth: {
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
      };
    } catch (error) {
      console.log(error);
    }
  };

  handleChange(event: any) {
    const { name, value } = event.target;

    const userAuth = this.state.userAuth;
    this.setState({
      userAuth: {
        ...userAuth,
        [name]: value,
      },
    });
  }

  render() {
    const { displayName, email, password, confirmPassword } =
      this.state.userAuth;

    console.log(this.state);
    return (
      <div className="sign-up">
        <h2 className="title">I do not have account</h2>
        <span>Sign In with your Email and Password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="Display Name"
            type="text"
            name="displayName"
            value={displayName}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label="Email"
            type="text"
            name="email"
            value={email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label="Password"
            type="password"
            name="password"
            value={password}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required
          />
          <CustomButton buttonType="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
