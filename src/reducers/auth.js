import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import { createReducer, createAction } from 'redux-act';

const initialState = {
    isAuthenticated: false,
    uid: null,
    username: null,
    email: null,
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
    [facebookLoginSuccess]: (state, payload) => ({ ...state, token: payload }),
    [facebookLoginFailed]: state => ({ ...state, token: null }),
}, initialState);


export default authReducer;