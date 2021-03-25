import React, { FunctionComponent } from 'react';
import './form-input-style.scss';
import {FormInputType} from './../../types/form-controls'


export const FormInput:FunctionComponent<FormInputType> = ({handleChange, label, ...others}) => {

    return <div className="group">
        <input className='form-input' onChange={handleChange} {...others}/>
        {label ? <label className={`${(others.value.length ? 'shrink' : '')} form-input-label`}>
        {label}
        </label> : null}
    </div>

}