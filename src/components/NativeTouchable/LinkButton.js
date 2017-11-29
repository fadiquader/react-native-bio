import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    StyleSheet,
    View,
    Text
} from "react-native";
import { Button } from 'native-base';
import { Link } from 'react-router-native'
import ListItem from './ListItem';
import s from './styles';

class LinkButton extends Component {
    static contextTypes = {
        history: PropTypes.object
    };
    onPress = () => {
        onPress && onPress();
    };

    onLongPress = () => {

    };

    render() {
        const { text, active, style } = this.props;
        return (
            <ListItem onPress={this.onPress}
                      onLongPress={this.onLongPress}
                      style={[style, active && s.activeMenuItem ]}>
                <Text>
                    { text }
                </Text>
            </ListItem>
        )
    }
}

LinkButton.defaultProps = {
    style: {},
    active: false
};

export default LinkButton;