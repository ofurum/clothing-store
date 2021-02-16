import React from 'react';

import './cart-icon.styles.scss'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag/shopping.svg';

import { connect } from "react-redux";

import {toggleCart} from '../../redux/cart/cart.action'


const CartIcon = ({toggleCart}) => {
    return(
        <div className="cart-icon" onClick={toggleCart}>
            <ShoppingIcon className="shooping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart())
});


export default connect(null, mapDispatchToProps)(CartIcon);