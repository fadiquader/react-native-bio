import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    Dimensions,
    StatusBar,
    AsyncStorage
} from 'react-native';

import {NavigationActions} from 'react-navigation';

let timeFrame = 500;

export class SplashScreen extends Component {

    constructor(props) {
        super(props);
    }

    async componentWillMount() {
        StatusBar.setHidden(true, 'none');
        let token = await AsyncStorage.getItem('fb_token');
        let route = token ? 'Home': 'LogIn';
        let toHome = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: route})]
        });
        StatusBar.setHidden(false, 'slide');
        this.props.navigation.dispatch(toHome)
    }


    render() {
        let width = Dimensions.get('window').width;
        return (
            <View style={{
                flex: 1
            }}>
                <Text>Splash</Text>
            </View>
        )
    }
}
