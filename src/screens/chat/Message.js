import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Dimensions,
    StatusBar,
} from 'react-native';
import { Icon, Button, Text, Thumbnail } from 'native-base';

export class Message extends Component {
    static navigationOptions = ({navigation}) => {
        return (
            {
                headerTitle: <Text>FadiQua</Text>,
                headerRight: <View style={{ flexDirection: 'row'}}>
                    <Thumbnail style={{
                        width: 35,
                        height: 35,
                        marginRight: 16,
                    }} source={{
                        uri: 'http://staging.openscreenplay.com/files/575b8014-4ee.png'
                    }} />
                </View>

            });
    };

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={{
                flex: 1
            }}>
                <Text>Message</Text>

            </View>
        )
    }
}
