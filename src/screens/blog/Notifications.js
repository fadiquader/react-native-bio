import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    Dimensions,
    StatusBar
} from 'react-native';
import { Icon } from 'native-base';

export class Notifications extends Component {
    static navigationOptions = {
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="person"/>
        ),
    };
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <Text>Notifications</Text>
            </View>
        )
    }
}
