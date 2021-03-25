import React from 'react';

import './sign-in-styles.scss';
import {SignInType} from './../../types/sign-in-sign-up';
import {FormInput} from './../form-input/form-input-component';
import { Button } from '../button/button-component';

export default class SignIn extends React.Component<{}, SignInType>{

    constructor({}){
        super({});
        
        this.state = {email: '', passWord: ''};
    }

    handleSubmit = (event: any) => {
        event.preventDefault();

        this.setState({email: '', passWord:''})
    }

    handleChange = (event: any) => {

        const {value, name} = event.target;


        if(name === "email")
            this.setState({email: value})
        else
            this.setState({passWord: value})

    }

    render(){
        return <div className="sign-in">
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
                <Button>Sign In</Button>
            </form>
        </div>
    }

}