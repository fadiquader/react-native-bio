import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    Dimensions,
    StatusBar
} from 'react-native';

import {NavigationActions} from 'react-navigation';

let timeFrame = 500;

export class SplashScreen extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        StatusBar.setHidden(true, 'none');
        setTimeout(() => {
            StatusBar.setHidden(false, 'slide');
            let toHome = NavigationActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({routeName: 'Home'})]
            });
            this.props.navigation.dispatch(toHome)
        }, timeFrame);
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
