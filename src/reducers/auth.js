import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import { createReducer, createAction } from 'redux-act';

const initialState = {
    isAuthenticated: false,
    id: null,
    name: null,
    loading: false,
    error: null,
    token: null,
};

// actions
export const facebookLoginSuccess = createAction('facebookLoginSuccess');
export const facebookLoginFailed = createAction('facebookLoginFailed');
export const loginUser = createAction('loginUser');
export const doFacebookLogin = createAction('doLogin');

// reducer
const authReducer = createReducer({
    [facebookLoginSuccess]: (state, {id, name}) => ({ ...state, isAuthenticated: true, id, name }),
    [facebookLoginFailed]: state => ({ ...state, isAuthenticated: false }),
}, initialState);


export default authReducer;