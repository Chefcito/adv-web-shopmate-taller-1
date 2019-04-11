import React, { Component } from 'react';
import { observer } from 'mobx-react';

import store from '../../stores/stores';
import ProductCard from '../ProductCard/ProductCard';
import NavBar from '../NavBar/NavBar';
import ProductManager from '../ProductManager/ProductManager';

@observer class ShopingCart extends Component {

  constructor(props: {}){
    super(props);

    store.getDepartments();
  }

  render() {
    return (
      <div className="shopping-cart">
        <div className="shopping-cart__nav-bar">
          <NavBar />
        </div>

        <div className="shopping-cart__products">
          {store.shoppingCart && store.shoppingCart.map((product) => {
            return  <div className="store__catalog__product-card" key={product.product_id}>
              <ProductCard 
              id = {product.product_id}
              image = {`https://backendapi.turing.com/images/products/${product.thumbnail}`}
              name = {product.name} 
              description = {product.description}
              price = {product.price}
              click = {()=>{store.setShoppingCartProduct(product)}}/>
            </div>
          })}
        </div>
      </div>
    );
  }
}

export default ShopingCart;