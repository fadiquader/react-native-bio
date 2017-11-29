import { Facebook } from 'expo';
import { AsyncStorage } from 'react-native';
import { takeEvery } from 'redux-saga'
import { fork, take, call, put, cancel, all  } from 'redux-saga/effects'
import axios from 'axios';
import openSocket from 'socket.io-client';
import {
    doFacebookLogin,
    facebookLoginFailed,
    facebookLoginSuccess
} from '../reducers/auth'
import { socialId } from '../config/constatns'

const doFacebookLoginAsync = function* (action) {
    try {
        const { type, token } =  yield call(Facebook.logInWithReadPermissionsAsync,socialId.facebook, {
            permissions: ['public_profile']
        });
        if(type === 'cancel') {
            // return dispatch(facebookLoginFailed())
        }
        console.log('token ', token)
        // yield call(AsyncStorage.setItem, 'fb_token', token);
        // yield put({type: facebookLoginFailed, payload:action.payload});
    } catch (e) {

    }
}

export const watchDoFacebookLoginAsync =  function* () {
    yield takeEvery(doFacebookLogin, doFacebookLoginAsync)
};