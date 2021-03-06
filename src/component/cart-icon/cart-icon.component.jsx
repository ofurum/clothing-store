import React from 'react';

import './cart-icon.styles.scss'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag/shopping.svg';

import { connect } from "react-redux";

import {toggleCart} from '../../redux/cart/cart.action';

import {itemsCounted} from '../../redux/cart/cart.selector';

import { createStructuredSelector } from "reselect";


const CartIcon = ({toggleCart, itemCount}) => {
    return(
        <div className="cart-icon" onClick={toggleCart}>
            <ShoppingIcon className="shooping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart())
});

const mapStateToProps = createStructuredSelector({
    itemCount: itemsCounted
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);