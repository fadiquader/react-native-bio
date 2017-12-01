import { Facebook } from 'expo';
import { AsyncStorage } from 'react-native';
import { takeEvery } from 'redux-saga'
import { fork, take, call, put, cancel, all  } from 'redux-saga/effects'
import axios from 'axios';
// import openSocket from 'socket.io-client';
import {
    doFacebookLogin,
    facebookLoginFailed,
    facebookLoginSuccess
} from '../reducers/auth'
import { socialId } from '../config/constatns'

const doFacebookLoginAsync = function* (action) {
    // fadi.qua
    // fadi$008390791
    try {
        const { type, token } =  yield call(Facebook.logInWithReadPermissionsAsync, socialId.facebook, {
            permissions: ['public_profile']
        });
        console.log('rest ', type);
        if(type === 'cancel') {
            yield put({type: facebookLoginFailed});
            return;
        }
        const response = yield call(axios.get,`https://graph.facebook.com/me?access_token=${token}`);
        const data = response.data;
        console.log('response ', response.data)
        yield call(AsyncStorage.setItem, 'fb_token', token);
        yield put({type: facebookLoginSuccess, payload:data});
    } catch (e) {
        yield put({type: facebookLoginFailed})
    }
}

export const watchDoFacebookLoginAsync =  function* () {
    yield takeEvery(doFacebookLogin, doFacebookLoginAsync)
};