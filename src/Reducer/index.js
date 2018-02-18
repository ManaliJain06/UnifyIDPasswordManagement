/**
 * Created by ManaliJain on 9/30/17.
 */

import {combineReducers} from 'redux';
import userStateReducer from './userState';
// import loginDataReducer from './loginDataReducer';
import userMenuReducer from './userMenuReducer';
// import userFilesReducer from './userFilesReducer';

const allReducers = combineReducers({
    // loginState: loginStateReducer,
    userMenu: userMenuReducer,
    userState: userStateReducer

});

export default allReducers;