import React from 'react';

import './check-out.styles.scss';

import {connect} from 'react-redux';

import {selectedCartItem, totalAmountOfItems} from '../../redux/cart/cart.selector';

import {createStructuredSelector} from 'reselect';

import {toggleCart} from '../../redux/cart/cart.action';

import CheckoutItem from '../../component/checkoutItem/checkoutItem.component'

const CheckOut = ({cartItems, total, toggleCart}) => (
  <div className="checkout-page">
     <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>description</span>
      </div>
      <div className="header-block">
        <span>quantity</span>
      </div>
      <div className="header-block">
        <span>price</span>
      </div>
      <div className="header-block">
        <span>remove</span>
      </div>
    </div> 
    {
        cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
    }
    <div className="total">
        Total: ${total}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectedCartItem,
    total: totalAmountOfItems
})

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);