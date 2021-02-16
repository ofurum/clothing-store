import { UserActionTypes } from '../../src/redux/user/user.types';

const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export default setCurrentUser;