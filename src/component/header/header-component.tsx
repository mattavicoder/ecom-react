import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from './../../assests/crown.svg';
import './header-styles.scss'

export const Header:FunctionComponent<{}> = () => {
    return <div className="header">
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
            </div>

    </div>
}