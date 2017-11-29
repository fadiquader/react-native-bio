import React from 'react';
import {StackNavigator} from 'react-navigation'
import { NavBar, ToolBar } from '../components/NavBar';
import transition from '../navigation/transitions';
import * as Auth from '../screens/login';

export default StackNavigator({
    Login: {
        screen: Auth.Login1,
        title: 'Login'
    },
    SignUp: {
        screen: Auth.SignUp,
        title: 'SignUp'
    },

}, {
    initialRouteName: 'Login',
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