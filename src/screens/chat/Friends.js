import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Dimensions,
    StatusBar
} from 'react-native';
import { Icon, Button, Text } from 'native-base';

export class Friends extends Component {
    static navigationOptions = {
        tabBarLabel: 'Friends',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="apps" style={{ color: tintColor}} />
        ),
    };
    render() {
        const { navigation } = this.props;
        return (
            <View style={{
                flex: 1
            }}>
                <Text>Friends</Text>
                <Button onPress={() => navigation.navigate('Profile')}>
                    <Text>Friend</Text>
                </Button>
            </View>
        )
    }
}
