import React, { FunctionComponent } from 'react'
import {TypeMenu} from '../../types/menuitem-type'
import './menuitem-styles.scss';
import {RouteComponentProps, withRouter} from 'react-router-dom'

interface reactState extends RouteComponentProps<any>{
    typeMenu: TypeMenu
}

const MenuItem: FunctionComponent<reactState> = ({ typeMenu: {title, imageUrl, size},history}) => {
    console.log(history)
   return <div className={`${size} menu-item`} onClick={() => history.push('/india')} >
       <div className="background-image" style={{
       backgroundImage: `url(${imageUrl})` 
   }} />
                    <div className="content">
                        <h1 className="title">{title.toUpperCase()}</h1>
                            <span className="subtitle">
                                SHOP NOW
                            </span>
                    </div>
                </div>
}

export default withRouter(MenuItem);