import React from 'react';
import {
    StyleSheet,
    View,
    Platform,
    Text,
    Dimensions
} from 'react-native';
import _ from 'lodash';
import { Container, Header, Content, Icon } from 'native-base';
import IconButton from '../NativeTouchable/IconButton';
import UIConstants from '../../config/appConstants';

// import {FontAwesome} from '../../assets/icons';

// import {scale, scaleModerate, scaleVertical} from '../utils/scale';

export class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: undefined};

    }

    _renderRight(headerRight) {
        let windowWidth = Dimensions.get('window').width;
        const width = this.state.width
            ? (windowWidth - this.state.width) / 2
            : undefined;

        return headerRight && (
            <View style={[{width}, styles.right]}>{headerRight}</View>
        );
    }

    _renderLeft(headerLeft) {
        if (headerLeft) {
            return (
                <View style={styles.left}>{headerLeft}</View>
            )
        }

        let windowWidth = Dimensions.get('window').width;
        const width = this.state.width
            ? (windowWidth - this.state.width) / 2
            : undefined;

        let renderLeftContent = () => {
            let index = _.findIndex(this.props.headerProps.scenes, {isActive: true});
            if (index > 0) {
                return <IconButton ios='ios-arrow-back' android="md-arrow-back"
                                   onPress={() => {
                                       this.props.navigation.goBack()
                                   }}
                                   style={styles.menu} />
            }
            else {
                return <IconButton ios='ios-menu' android="md-menu"
                      onPress={() => {
                          this.props.navigation.navigate('DrawerOpen')
                      }}
                      style={styles.menu}/>
            }
        };

        return (
            <View style={[{width}, styles.left]}>
                {renderLeftContent()}
            </View>
        )
    }

    _renderTitle(title, headerTitle) {
        if (headerTitle) {
            return (
                <View style={styles.title} onLayout={onLayout}>{headerTitle}</View>);
        }

        const onLayout = (e) => {
            this.setState({
                width: e.nativeEvent.layout.width,
            });
        };

        return (
            <View style={styles.title} onLayout={onLayout}>
                <Text>{title}</Text>
            </View>
        )
    }

    render() {
        let options = this.props.headerProps.getScreenDetails(this.props.headerProps.scene).options;
        return (
            <View style={styles.layout}>
                <View style={styles.container}>
                    {this._renderLeft(options.headerLeft)}
                    {this._renderTitle(options.title, options.headerTitle)}
                    {this._renderRight(options.headerRight)}
                </View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    layout: {
        backgroundColor: "#eeeeee",
        paddingTop: UIConstants.StatusbarHeight,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#f5f5f5'
    },
    container: {
        flexDirection: 'row',
        height:50,

    },
    left: {
        // position: 'absolute',
        // top: 0,
        // bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: 35,
        marginLeft: 16,
        marginRight: 16
    },
    right: {
        // position: 'absolute',
        // right: 0,
        // top: 0,
        // bottom: 0,
        justifyContent: 'center',
    },
    title: {
        ...Platform.select({
            android: {
                // justifyContent: 'flex-start',
                alignItems: 'flex-start',
            },
            ios: {
                // ...StyleSheet.absoluteFillObject,
                alignItems: 'center',
            }
        }),
        justifyContent: 'center',
    },
    menu: {
        // width: 40
    }
});