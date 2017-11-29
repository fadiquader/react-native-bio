import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import IconButton from '../NativeTouchable/IconButton';

export class ToolBar extends Component {
    constructor(props) {
        super(props);
        this.state = {width: undefined};
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
        return (
            <Left>
                {renderLeftContent()}
            </Left>
        )
    }
    render() {
        let options = this.props.headerProps.getScreenDetails(this.props.headerProps.scene).options;

        return (
            <Header noShadow>
                { this._renderLeft(options.headerLeft) }
                <Body>
                <Title>{ options.title || options.headerTitle}</Title>
                </Body>
                { this._renderRight(options.headerRight)}
            </Header>
        );
    }
}

const styles = StyleSheet.create({
    navIcon: {
        marginLeft: 4,
        marginRight: 4
    }
})