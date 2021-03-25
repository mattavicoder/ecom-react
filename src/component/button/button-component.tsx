import React, { FunctionComponent } from 'react'
import './button-style.scss'

export const Button:FunctionComponent<{}> = ({children, ...others}) => {

    return <button type="button" className="custom-button" {...others}>
        {children}
    </button>

}