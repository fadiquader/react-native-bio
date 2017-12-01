import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

const PUSH_ENDPOINT = 'http://rallycoding.heroku.com/api/tokens';

export default async () => {
    let prevToken = await AsyncStorage.getItem('pushtoken');
    if(prevToken) return;
    let { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);
    if(status !== 'granted') return;
    let token = await Notifications.getExpoPushTokenAsync();
    const res = await axios.post(PUSH_ENDPOINT, { token: { token }});
    console.log('res ', res.data)
    await AsyncStorage.setItem('pushtoken', token)
}