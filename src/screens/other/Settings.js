import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    Dimensions,
    StatusBar
} from 'react-native';

export class Settings extends Component {
    static navigationOptions = {
        title: 'Settings'.toUpperCase()
    };
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <Text>Settings</Text>
            </View>
        )
    }
}
