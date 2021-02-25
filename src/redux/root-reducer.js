import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import userReducer from './user/user-redux';
import cartReducer from './cart/cart.reducer';
import storage from 'redux-persist/lib/storage';
import directoryReducer from './directory/directory.reducer';
import collectionReducer from './collection/collection.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  collection: collectionReducer
});
export default persistReducer(persistConfig, rootReducer)