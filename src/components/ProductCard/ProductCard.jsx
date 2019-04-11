import React, { Component } from 'react';

const ProductCard = (props) => {
    return <div className="product-card">
        <div className="product-card__image">
            <img className="product-card__image__img" src={props.image}/>
        </div>

        <div className="product-card__info">
            <h5 className="product-card__info__name">{props.name}</h5>
            {/* <p>{props.description}</p> */}
            <p className="product-card__info__price">€{props.price}</p>
            <button className="product-card__info__button" href="#">Add to Cart</button>
        </div>
    </div>
}

export default ProductCard;