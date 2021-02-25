import shopData from  '../../pages/shopPage/shop.data';
import {CollectionDataTypes} from './collection.type'
const INITIALIZE_STATE = {
    collections:  shopData
}

const collectionReducer = (state= INITIALIZE_STATE, action) => {
   if(action.type === CollectionDataTypes.COLLECTION_DATA){
       return {
           ...state,
           collections: state.collections
       }
   }

   return state;
}

export default collectionReducer;