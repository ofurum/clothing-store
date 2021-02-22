import React from 'react';

import './checkoutItem.styles.scss';
import {connect} from 'react-redux';
import {clearCartItem, removeItem, addItem} from '../../redux/cart/cart.action'


const CheckoutItem = ({setClearCartItem, addItem, removeItem, cartItem}) => {
   const { imageUrl, price, name, quantity } = cartItem
    return(
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="productImage" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
      <span className="value">{quantity}</span>
      <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
    </span>
    <span className="price">${price}</span>
    <div
      className="remove-button"
      onClick={() => setClearCartItem(cartItem)}
    >
      &#9747;
    </div>
  </div>
)};
const mapDispatchToProps= dispatch => ({
   setClearCartItem: (item) => dispatch(clearCartItem(item)),
   addItem: (item) => dispatch(addItem(item)),
   removeItem: (item) => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);