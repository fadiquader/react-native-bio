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

export class Bookmark extends Component {
    static navigationOptions = {
        tabBarLabel: 'Bookmark',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="navigate"/>
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
                <Text>Bookmark</Text>
            </View>
        )
    }
}
