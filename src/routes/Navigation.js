import React from 'react';
import {StackNavigator} from 'react-navigation'
import { NavBar, ToolBar } from '../components/NavBar';
import transition from '../navigation/transitions';
import * as Navigation from '../screens/navigation';

export default StackNavigator({
    GridV2: {
        screen: Navigation.GridV2,
        title: 'GridV2'
    },
    GridV1: {
        screen: Navigation.GridV1,
        title: 'GridV1'
    },

}, {
    initialRouteName: 'GridV2',
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