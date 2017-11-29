import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    Dimensions,
    StatusBar,
    BackHandler
} from 'react-native';
import {
    Container,
    Header, Content, Footer,
    FooterTab, Button, Icon,
    Text, Form, Item, Input, Label,
    Radio,
    Tab, Tabs
} from 'native-base';

export class SignUp extends Component {
    // static navigationOptions = {
    //     header: null,
    // };
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log('tabss ', this.tabs)
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true
        });
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress');
    }

    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <Text>Sign up</Text>
            </View>
        )
    }
}
