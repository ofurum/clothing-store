import React from 'react';

import './checkoutItem.styles.scss';


const CheckoutItem = ({ cartItem: { imageUrl, price, name, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="productImage" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">${price}</span>
    <div className="remove-button">&#9747;</div>
  </div>
);

export default CheckoutItem;