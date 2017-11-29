import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Dimensions,
    StatusBar
} from 'react-native';
import { Icon, Button, Text } from 'native-base';

export class Messages extends Component {
    static navigationOptions = {
        tabBarLabel: 'Messages',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="apps" style={{ color: tintColor}}/>
        ),
    };
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{
                flex: 1
            }}>
                <Text>Messages</Text>
                <Button onPress={() => navigation.navigate('Message')}>
                    <Text>Message</Text>
                </Button>
                <Button onPress={() => navigation.navigate('History')}>
                    <Text>History</Text>
                </Button>
            </View>
        )
    }
}
