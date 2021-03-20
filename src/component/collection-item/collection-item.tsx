import React, { FunctionComponent } from 'react';
import './collection-item.scss';

import {ShopItem} from  './../../types/shopitems-type';


export const CollectionItem:FunctionComponent<ShopItem> = ({name, imageUrl, price }) => {
    return <div className="collection-item">
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}}>
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
    </div>
}

