import React from 'react';
import { CollectionPreview } from '../../component/collection-preview/collection-preview';
import { ShopCategory, ShopCategoryData } from '../../types/shopitems-type';
import {SHOP_DATA} from './shop-data';


export default class ShopPage extends React.Component<{}, ShopCategoryData>{

    constructor({}){
        super({});

        this.state = {shopCategories: SHOP_DATA};
    }

    render(){
        const categories = this.state.shopCategories;
        return <div>
            {
                categories.map((item) => {
                    return <CollectionPreview key={item.id} {...item}/>

                })
            }

        </div>
    }


    


}   