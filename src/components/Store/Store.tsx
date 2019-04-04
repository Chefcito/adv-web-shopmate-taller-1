import React, { Component } from 'react';
import { observer } from 'mobx-react';

import store from '../../stores/stores';

import Filters from '../Filters/Filters';
import { privateEncrypt } from 'crypto';

@observer
class Store extends Component{
    constructor(props: {}){
        super(props);

        store.getProducts();
    }   

    render(){
        return <div>
            <h1>Store page</h1>
            <p>productos</p>
            {store.products && store.products.map(( prod ) => {
            return <div key={prod.product_id}>
            <h2>{prod.name}</h2>
            <img src={`https://backendapi.turing.com/images/products/${prod.thumbnail}`} alt=""/>
            <p>{prod.description}</p>
            <p>{prod.price}</p>
            </div>;
        })}
        </div>
    }
}

export default Store;