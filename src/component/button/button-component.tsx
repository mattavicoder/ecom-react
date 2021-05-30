import React, { FunctionComponent } from "react";
import "./button-style.scss";

interface buttonProps {
  children: React.ReactNode;
  onClick?: any;
  isGoogleSignIn?: boolean;
  buttonType?: string;
  inverted?: boolean;
}

export const CustomButton: FunctionComponent<buttonProps> = ({
  children,
  buttonType = "button",
  isGoogleSignIn = false,
  inverted = false,
  ...others
}) => {
  return (
    <button
      type={buttonType == "submit" ? "submit" : "button"}
      className={`${isGoogleSignIn ? "google-sign-in" : ""}
                  ${inverted ? "inverted" : ""}
                   custom-button`}
      {...others}
    >
      {children}
    </button>
  );
};
