import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon, Button } from 'native-base';
import ListItem from './ListItem';
import Styles from './styles';
import * as v from '../../themeVariables';

class IconButton extends Component {
    renderLabel = () => {
        const { iosLabel } = this.props;
        return <Text style={[ Styles.defaultIconText]}>{ iosLabel }</Text>
    }
    render() {
        const { ios, android, color, style, theme, ...rest } = this.props;
        const isLight = theme === 'light';
        const rippleColor = isLight ? v.ANDROID_RIPPLE_COLOR_LIGHT: v.ANDROID_RIPPLE_COLOR_DARK;
        return (
            <ListItem rippleColor={rippleColor}
                      onPress={this.props.onPress}
                      style={style}
                      borderless icon>
                <Icon ios={ios}
                      android={android}
                      style={[
                          isLight ? Styles.iconButtonLight : Styles.iconButtonDark,
                      ]}
                />
            </ListItem>
        )
    }
}

IconButton.defaultProps = {
    style: {},
    active: false,
    theme: 'light'
};

export default IconButton;