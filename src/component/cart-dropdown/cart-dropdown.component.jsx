import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../../component/cart-item/cart-item.component'
import './cart-dropdown.styles.scss';
import { selectedCartItem } from "../../redux/cart/cart.selector";
import { toggleCart } from "../../redux/cart/cart.action";


 const CartDropdown = ({cartItems, history, setToggleCart}) => {
     return (
       <div className="cart-dropdown">
         <div className="cart-items">
           {
             cartItems.length ? 
             cartItems.map((cartItem) => (
               <CartItem key={cartItem.id} item={cartItem}/>
     )): <span className="empty-cart">Your cart is empty</span>
           }
         </div>
          
           <CustomButton onClick={()=>{history.push('/check-out'); setToggleCart(toggleCart)}}>go to checkout</CustomButton>
       </div>
     );
 };

 
const mapStateToProps = createStructuredSelector({
  cartItems: selectedCartItem,
});

const mapDispatchToProps = (dispatch) => ({
  setToggleCart: (item) => dispatch(toggleCart(item)),
});

 export default withRouter(
   connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
 );