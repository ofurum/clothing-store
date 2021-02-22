import {createSelector} from 'reselect';

const displayUserProperty = state => state.user;

export const seletedUser = createSelector(
    displayUserProperty,
    user => user.currentUser
); //this will bring out the current user value whether null or present

