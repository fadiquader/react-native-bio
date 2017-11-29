import React from 'react';
import {
    Container,
    Header, Content, Footer,
    FooterTab, Button, Icon,
    Text, Form, Item, Input, Label,
    Radio
} from 'native-base';
import {TabNavigator, StackNavigator} from 'react-navigation'
import { NavBar, ToolBar, FooterBar } from '../components/NavBar';
import transition from '../navigation/transitions';
import * as Chat from '../screens/chat';
import * as V from '../themeVariables'
export default StackNavigator({
    ChatTabs: {
        title: "Chat",
        screen: TabNavigator({
            Messages: {
                screen: Chat.Messages,
                title: 'Messages',
            },
            Friends: {
                screen: Chat.Friends,
                title: 'Friends',
            },
        }, {
            initialRouteName: 'Messages',
            headerMode: 'screen',
            lazy: true,
            cardStyle: { backgroundColor: 'transparent' },
            transitionConfig: transition,
            tabBarPosition: 'top',
            animationEnabled: true,
            backBehavior: 'initialRoute',
            tabBarOptions: {
                showIcon: true,
                indicatorStyle: {
                    backgroundColor: 'white',
                },
                style: {
                    backgroundColor: V.PRIMARY_COLOR
                },
                // inactiveBackgroundColor: V.PRIMARY_COLOR
            },
            // tabBarComponent:  (props) => <FooterBar { ...props } />
        })
    },
    Message: {
        screen: Chat.Message,
        title: 'Message'
    },
    Profile: {
        screen: Chat.Profile,
        title: 'Profile'
    },
    History: {
        screen: Chat.History,
        title: 'History'
    },
},{
    initialRouteName: 'ChatTabs',
    headerMode: 'screen',
    title: "Chat",
    cardStyle: {backgroundColor: 'transparent'},
    transitionConfig: transition,
    navigationOptions: ({navigation, screenProps}) => ({
        gesturesEnabled: false,
        header: (headerProps) => {
            return <ToolBar navigation={navigation}
                            headerProps={headerProps}/>
        }
    })
})