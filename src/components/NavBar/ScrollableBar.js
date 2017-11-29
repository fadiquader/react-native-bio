import React, {Component} from 'react';
import {
    Animated,
    Image,
    ScrollView,
    StyleSheet,
    View,
    Platform
} from 'react-native';
import { Text, Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import IconButton from '../NativeTouchable/IconButton';
import theme  from '../../../native-base-theme/variables/material';
import * as V from '../../themeVariables';

const NAVBAR_HEIGHT = theme.toolbarHeight;
// const STATUS_BAR_HEIGHT = Platform.select({ ios: 20, android: 24 });
const STATUS_BAR_HEIGHT = 0;

export class ScrollableBar extends Component {

    constructor(props) {
        super(props);
    }

    _renderRight(headerRight) {
        let renderRightContent = () => {
            return headerRight && headerRight;
        }
        return (
            <Right>
                { renderRightContent() }
            </Right>
        )
    }
    _renderLeft(headerLeft) {
        let renderLeftContent = () => {
            let index = _.findIndex(this.props.headerProps.scenes, {isActive: true});
            if (index > 0) {
                return (
                    <IconButton ios="ios-arrow-back"
                                android="md-arrow-back"
                                back
                                style={styles.navIcon}
                                onPress={() => this.props.navigation.goBack() } />
                )
            }
            // else {
            //     return <IconButton ios="ios-menu"
            //                        android="md-menu"
            //                        style={styles.navIcon}
            //                        onPress={() => {
            //                            this.props.navigation.navigate('DrawerOpen')
            //                        }}/>
            // }
        };
        return <Left>
            { renderLeftContent() }
        </Left>
    }

    render() {
        let options = this.props.headerProps.getScreenDetails(this.props.headerProps.scene).options;
        const { clampedScroll } = this.props;
        let navbarTranslate = 0,
            navbarOpacity  = 1;

        if(clampedScroll !== null){
            navbarTranslate = clampedScroll.interpolate({
                inputRange: [0, NAVBAR_HEIGHT - STATUS_BAR_HEIGHT],
                outputRange: [0, -(NAVBAR_HEIGHT - STATUS_BAR_HEIGHT + 24)],
                extrapolate: 'clamp',
            });
            navbarOpacity = clampedScroll.interpolate({
                inputRange: [0, NAVBAR_HEIGHT - STATUS_BAR_HEIGHT],
                outputRange: [1, 0],
                extrapolate: 'clamp',
            });

        }

        return (
            <Animated.View style={[ {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: NAVBAR_HEIGHT,
                paddingTop: STATUS_BAR_HEIGHT,
                flex: 1,
                overflow: 'hidden'
            },{ transform: [{ translateY: navbarTranslate }] }]}>
                <Header>
                    <Animated.View style={[{
                        flex: 1,
                        flexDirection: 'row',
                        paddingHorizontal: 10,
                        opacity: navbarOpacity }]}>
                        { this._renderLeft(options.headerLeft) }
                        <Body>
                        <Text>Scrollable</Text>
                        </Body>
                        { this._renderRight(options.headerRight)}
                    </Animated.View>
                </Header>


            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    fill: {
        flex: 1,
    },
    row: {
        height: 40,
        margin: 16,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
