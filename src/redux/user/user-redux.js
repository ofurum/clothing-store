import { UserActionTypes} from './user.types';

const INITIALIZE_STATE = {
    currentUser: null,
}



const userReducer = (state = INITIALIZE_STATE, action) => {
    if(action.type === UserActionTypes.SET_CURRENT_USER){
        return {
            ...state, 
            currentUser: action.payload
        }
    }
    return state;
};



export default userReducer