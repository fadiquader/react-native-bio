import React, { Component } from 'react';
import Expo from 'expo';
import {connect, Provider} from 'react-redux';
import { View } from 'react-native';
import { Container, Content, Text, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import platform from './native-base-theme/variables/platform';
import Root from './src';
import store from './src/store';
import registerPushNotifications from './src/services/pushNotifications';

export default class App extends Component {
    state = {
        isReady: false
    };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        registerPushNotifications();
        this.setState({
            isReady: true
        })
    }
    render() {
        const { isReady } = this.state;
        if(!isReady) return <View />;
        return (
            <Provider store={store}>
                <StyleProvider style={getTheme(material)}>
                    <Root/>
                </StyleProvider>
            </Provider>
        )
    }
}
// export default App;