import React, { Component } from 'react';
import { observer } from 'mobx-react';

import store from '../../stores/stores';
import { product } from '../../stores/stores';

import Filters from '../Filters/Filters';
import { privateEncrypt } from 'crypto';
import ProductCard from '../ProductCard/ProductCard';
import FilterManager from '../FilterManager/FilterManager';

@observer
class Store extends Component{
    constructor(props: {}){
        super(props);

        store.getProducts();
    }   

    render(){
        return <div className="store">
            <div className="store__filter-manager">
                <FilterManager />
            </div>

            <div className="store__catalog">
                {store.products && store.products.map(( prod ) => {
                    return <div className="store__catalog__product-card" key={prod.product_id}>
                        <ProductCard
                            id = {prod.product_id}
                            image = {`https://backendapi.turing.com/images/products/${prod.thumbnail}`}
                            name = {prod.name} 
                            description = {prod.description}
                            price = {prod.price}
                            click = {()=>{store.setShoppingCartProduct(prod)}}/>
                    </div>;
                })}   
            </div>
        </div>
    }
}

export default Store;