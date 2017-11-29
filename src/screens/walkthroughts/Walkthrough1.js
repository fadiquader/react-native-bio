import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text
} from 'react-native';

export class Walkthrough1 extends Component {

    render() {
        return (
            <View style={styles.screen}>
                <Image source={require('../../assets/images/kittenImage.png')}/>
                <Text style={styles.text}>Welcome to Kitten Tricks</Text>

            </View>
        )
    }
}

let styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    text: {
        marginTop: 20
    }
});