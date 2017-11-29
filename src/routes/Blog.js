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
import * as Blog from '../screens/blog';

export default StackNavigator({
    BlogTabs: {
        title: "Blog Tabs",
        screen: TabNavigator({
            Articles: {
                screen: Blog.Articles,
                title: 'Articles',
            },
            Bookmark: {
                screen: Blog.Bookmark,
                title: 'Bookmark',
            },
            Notifications: {
                screen: Blog.Notifications,
                title: 'Notifications',
            },

        }, {
            initialRouteName: 'Articles',
            headerMode: 'screen',
            cardStyle: {backgroundColor: 'transparent'},
            transitionConfig: transition,
            tabBarPosition: 'bottom',
            tabBarComponent:  (props) => <FooterBar { ...props } />
        })
    }
},{
    initialRouteName: 'BlogTabs',
    headerMode: 'screen',
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