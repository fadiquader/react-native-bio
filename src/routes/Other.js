import React from 'react';
import {StackNavigator} from 'react-navigation'
import { NavBar, ToolBar } from '../components/NavBar';
import transition from '../navigation/transitions';
import * as Other from '../screens/other';

export default StackNavigator({
    Settings: {
        screen: Other.Settings,
        title: 'Settings'
    },
}, {
    initialRouteName: 'Settings',
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