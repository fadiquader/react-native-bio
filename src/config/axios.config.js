import axios from 'axios';
import { AsyncStorage } from 'react-native';
import store from '../store';

const axiosInterceptor = () => {
    axios.interceptors.response.use(undefined, function (error) {
        // Do something with response error
        if(error.response.status === 401){
            console.log('401 unauthorised');
            clearToken();
            // store.disbatch(showSignin())
        }
        return Promise.reject(error);
    });
}

export async function getAccessToken() {
    let token = await AsyncStorage.getItem('token');
    return token ? token: null;
}


export function setAccessToken(token) {
    axios.defaults.headers.common['Authorization'] = token;
}
const axiosConfig = () => {
    const token = getAccessToken();
    if(token) {
        setAccessToken(token);
    }
    axiosInterceptor()
};

export const saveToken = async token => {
    await AsyncStorage.setItem('token', token)
    setAccessToken(token);
    return;
};

export const clearToken = async () => {
    await AsyncStorage.removeItem('token')
    setAccessToken(null);
};

export default axiosConfig;