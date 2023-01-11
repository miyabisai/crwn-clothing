import { USER_ACTION_TYPES } from './user.types';
// const setCurrentUser = user=>{
//     dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER,payload:user});
// }

//Not yet dispatch,only return object;
export const setCurrentUser = user => (
    { type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user }
);