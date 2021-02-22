import CartActionTypes from '../cart/cart.types';

import addItemToCart from './cart.utils'

const INITIALIZE_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIALIZE_STATE, action) =>{
    if(action.type === CartActionTypes.TOGGLE_CART_HIDDEN){
        return{
            ...state,
            hidden: !state.hidden
        }
    }
    if(action.type === CartActionTypes.ADD_ITEM){
        return {
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload),
        };
    }
    return state;
}


export default cartReducer;
