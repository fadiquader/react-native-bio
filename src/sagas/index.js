import { all } from 'redux-saga/effects';
import { watchDoFacebookLoginAsync } from './auth'

const rootSaga =  function* rootSaga() {
    yield all([
        watchDoFacebookLoginAsync()
    ])
};

export default rootSaga;