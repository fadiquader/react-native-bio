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

const doFacebookLogin = async () => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync('158671718005040', {
        permissions: ['public_profile']
    });
    if(type === 'cancel') return;
    await AsyncStorage.setItem('fb_token', token);
};
// reducer
const authReducer = createReducer({
    [facebookLoginSuccess]: (state, payload) => ({ ...state, token: payload }),
    [facebookLoginFailed]: state => ({ ...state, token: null }),
}, initialState);


export default authReducer;