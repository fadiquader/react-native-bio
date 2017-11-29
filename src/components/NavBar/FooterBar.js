import React, { Component } from 'react';
import {
    Container,
    Header, Content, Footer,
    FooterTab, Button, Icon,
    Text, Form, Item, Input, Label,
    Radio
} from 'native-base';

export class FooterBar extends Component {
    renderTabs = () => {
        const {
            navigation,
            jumpToIndex,
            renderIcon,
            getLabel
        } = this.props;

        const {
            routes
        } = navigation.state;

        return routes && routes.map((route, index) => {
            // console.log('route ', navigation.state)
            const focused = index === navigation.state.index;
            return (
                <Button key={route.key} vertical
                        active={focused}
                        onPress={() => jumpToIndex(index)}>
                    { renderIcon({ route })}
                    <Text>{ getLabel({ route }) }</Text>
                </Button>
            )
        })
    };

    render() {
        const {
            navigation,
            jumpToIndex
        } = this.props;

        const {
            routes
        } = navigation.state;
        return (
            <Footer>
                <FooterTab>
                    { this.renderTabs() }
                </FooterTab>
            </Footer>
        );
    }
}