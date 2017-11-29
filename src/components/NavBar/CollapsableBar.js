import React, {Component} from 'react';
import {
    Animated,
    Image,
    ScrollView,
    StyleSheet,
    View,
    Platform,
    Dimensions
} from 'react-native';
import { Text, Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import IconButton from '../NativeTouchable/IconButton';
import * as V from '../../themeVariables'

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const isIphoneX = Platform.OS === "ios" && deviceHeight === 812 && deviceWidth === 375;
const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = Platform.OS === "ios" ? (isIphoneX ? 88 : 64) : 56;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export class CollapsableBar extends Component {
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
            else {
                return <IconButton ios="ios-menu"
                                   android="md-menu"
                                   style={styles.navIcon}
                                   onPress={() => {
                                       this.props.navigation.navigate('DrawerOpen')
                                   }}/>
            }
        };
        return <View style={{
            position: 'absolute',
            top: 14,
            left: 16,
            zIndex: 999
        }}>
            { renderLeftContent() }
        </View>
    }

    render() {
        let options = this.props.headerProps.getScreenDetails(this.props.headerProps.scene).options;
        const { scrollY } = this.props;
        let headerHeight = 0,
            imageOpacity = 0,
            imageTranslate = 0;
        if(scrollY !== null){
            headerHeight = scrollY.interpolate({
                inputRange: [0, HEADER_SCROLL_DISTANCE],
                outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
                extrapolate: 'clamp',
            })
            imageOpacity = scrollY.interpolate({
                inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
                outputRange: [1, 1, 0],
                extrapolate: 'clamp',
            })
            imageTranslate = scrollY.interpolate({
                inputRange: [0, HEADER_SCROLL_DISTANCE],
                outputRange: [0, -50],
                extrapolate: 'clamp',
            })
        }

        return (
            <Animated.View style={[styles.header, {height: headerHeight}]}>
                <View style={{
                    flex: 1,
                    paddingHorizontal: 10,
                    top: 0,
                    left: 0,
                    right: 0,
                    flexDirection: "row"
                }}>
                    { this._renderLeft(options.headerLeft) }
                    <Animated.Image
                        style={[
                            styles.backgroundImage,
                            {opacity: imageOpacity, transform: [{translateY: imageTranslate}]},
                        ]}
                        source={require('../../assets/images/backgroundLoginV1.png')}
                    />
                    { this._renderRight(options.headerRight)}
                </View>
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
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: V.PRIMARY_COLOR,
        overflow: 'hidden',
    },
    title: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 18,
    },
    scrollViewContent: {
        marginTop: HEADER_MAX_HEIGHT,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        zIndex: 99,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
    },
});
