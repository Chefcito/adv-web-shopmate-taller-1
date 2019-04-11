import React, { Component } from 'react';
import { observer } from 'mobx-react';

import store from '../../stores/stores';
import ProductCard from '../ProductCard/ProductCard';
import NavBar from '../NavBar/NavBar';

@observer class ShopingCart extends Component {

  constructor(props: {}){
    super(props);

    store.getDepartments();
  }

  render() {
    return (
      <div className="shopping-cart">
        <NavBar />
        <div className="shopping-cart__products">
          {store.shoppingCart && store.shoppingCart.map(( prod ) => {
              return <div className="shopping-cart__products__product-card" key={prod.product_id}>
                  <ProductCard
                      image = {`https://backendapi.turing.com/images/products/${prod.thumbnail}`}
                      name = {prod.name} 
                      description = {prod.description}
                      price = {prod.price}/>
              </div>;
          })}   
        </div>

      </div>
    );
  }
}

export default ShopingCart;