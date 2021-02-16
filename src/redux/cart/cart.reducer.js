import CartActionTypes from '../cart/cart.types';

const INITIALIZE_STATE = {
    hidden: true
};

const cartReducer = (state = INITIALIZE_STATE, action) =>{
    if(action.type === CartActionTypes.TOGGLE_CART_HIDDEN){
        return{
            ...state,
            hidden: !state.hidden
        }
    }
    return state;
}


export default cartReducer;
