import {combineReducers} from 'redux'

import userReducer from './user/user-redux';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})