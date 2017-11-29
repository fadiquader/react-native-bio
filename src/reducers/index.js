// import { persistCombineReducers } from 'redux-persist';
import { combineReducers } from 'redux';

// import storage from 'redux-persist/es/storage';
// import { AsyncStorage } from 'react-native'
import auth from './auth';


// const config = {
//     key: 'primary',
//     storage: AsyncStorage,
// };

const reducers = combineReducers({
    auth,
});

export default reducers;