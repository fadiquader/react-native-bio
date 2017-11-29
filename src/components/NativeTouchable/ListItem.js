import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    Platform,
    TouchableNativeFeedback,
    View
} from "react-native";
import s from './styles';

function generateRipple (borderless, rippleColor) {
    let background = null;
    if(borderless) {
        if(!rippleColor || rippleColor.length === 0) {
            background = TouchableNativeFeedback.SelectableBackgroundBorderless();
        } else {
            background = TouchableNativeFeedback.Ripple(rippleColor, true)
        }
    } else {
        if(!rippleColor || rippleColor.length === 0) {
            background = TouchableNativeFeedback.SelectableBackground();
        } else  {
            background = TouchableNativeFeedback.Ripple(rippleColor);
        }
    }
    return background;
}
class ListItem extends Component {

    render() {
        const {
            borderless,
            rippleColor,
            icon,
            active,
            style
        } = this.props;
        if (
            Platform.OS === "ios" ||
            Platform.Version <= 21
        ) {
            return (
                <TouchableOpacity
                    onPress={this.props.onPress}
                    onLongPress={this.props.onLongPress}
                    ref={c => (this._root = c)}
                >
                    <View {...this.props} style={[s.list, style]}>
                        {this.props.children}
                    </View>
                </TouchableOpacity>
            );
        }
        const background = generateRipple(borderless, rippleColor);
        return (
            <TouchableNativeFeedback
                ref={c => (this._root = c)}
                onPress={this.props.onPress}
                onLongPress={this.props.onLongPress}
                background={
                    background
                }
                // userForeground={true}
            >
                <View {...this.props} style={[s.list, style]}>
                    {this.props.children}
                </View>
            </TouchableNativeFeedback>
        )
    }
}

ListItem.propTypes = {
    ...TouchableHighlight.propTypes,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
    itemDivider: PropTypes.bool,
    button: PropTypes.bool,
    icon: PropTypes.bool,
    borderless: PropTypes.bool,
    active: PropTypes.bool,
    rippleColor: PropTypes.string,
};
ListItem.defaultProps = {
    borderless: false,
    rippleColor: null,
    icon: false,
    active: false
}
export default ListItem;