import React from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase-util";
import { UserAuthModel } from "../../redux/Models/UserReduxModel";
import { CustomButton } from "../button/button-component";
import { FormInput } from "../form-input/form-input-component";

import "./sign-up-styles.scss";

export class SignUp extends React.Component<{}, UserAuthModel> {
  constructor(props: any) {
    super(props);

    this.state = {
      UserName: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (event: any) => {
    event.preventDefault();
    const { UserName, Email, Password, ConfirmPassword } = this.state;

    if (Password !== ConfirmPassword) {
      alert("passwords dont match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        Email || "",
        Password
      );
      await createUserProfileDocument(user, UserName);

      this.state = {
        UserName: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
      };
    } catch (error) {
      console.log(error);
    }
  };

  handleChange(event: any) {
    const { name, value } = event.target;

    const data = this.state;
    this.setState({
      ...data,
      [name]: value,
    });
  }

  render() {
    const { UserName, Email, Password, ConfirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have account</h2>
        <span>Sign In with your Email and Password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="Display Name"
            type="text"
            name="UserName"
            value={UserName}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label="Email"
            type="text"
            name="Email"
            value={Email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label="Password"
            type="password"
            name="Password"
            value={Password}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label="Confirm Password"
            type="password"
            name="ConfirmPassword"
            value={ConfirmPassword}
            required
          />
          <CustomButton buttonType="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
