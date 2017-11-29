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

export class Articles extends Component {
    static navigationOptions = {
        tabBarLabel: 'Articles',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="apps"/>
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
                <Text>Articles</Text>
            </View>
        )
    }
}
