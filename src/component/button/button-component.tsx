import React, { FunctionComponent } from 'react'
import './button-style.scss'

interface buttonProps {
    children: React.ReactNode,
    onClick?: any,
    isGoogleSignIn?: boolean
}

export const CustomButton:FunctionComponent<buttonProps> = ({children, isGoogleSignIn = false, ...others}) => {

    return <button type="button" className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...others}>
        {children}
    </button>

}