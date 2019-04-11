import React, { Component } from "react";
import { observer } from 'mobx-react';

@observer class ProductManager extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="product-manager">
            <div className="product-manager__image">
                <img className="product-manager__image__img" src={props.image}/>
            </div>

            <div className="product-manager__info">
                <h5 className="product-manager__info__name">{props.name}</h5>
                {/* <p>{props.description}</p> */}
                <p className="product-manager__info__price">€{props.price}</p>
            </div>
        </div>
    }
}

export default ProductManager;