import React, { Component } from 'react';
import shop_Data from './shop.data';
import  PreviewCollection from '../../component/preview-collection/preview-collection.component';

class ShopPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
          collections: shop_Data
        };
    }

    render() {
        const {collections} = this.state
        return (
            <div>
                <div>
                    {
                        collections.map((({id, ...otherCollection}) => (
                            <PreviewCollection key={id} {...otherCollection}/>
                        )))
                    }
                </div>
            </div>
        )
    }
}

export default ShopPage;