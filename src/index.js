import Expo from 'expo';
import React from 'react';
import { ScrollView } from 'react-native';
import {
    DrawerNavigator,
    StackNavigator,
} from 'react-navigation';
import {AppRoutes} from './navigation/routesBuilder';
import { Home } from './routes'
import * as Screens from './screens/index';

function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}


let SideMenu = Screens.SideMenu;
const Root = StackNavigator({
    First: {
        screen: Screens.SplashScreen
    },
    Walkthrough: {
        screen: Screens.WalkthroughScreen
    },
    LogIn: {
        screen: Screens.Login2
    },
    Home: {
        screen: DrawerNavigator(Home,
            {
                contentComponent: (props) => <SideMenu {...props}/>,
                initialRouteName: 'Chat'
            }
        )
    }
}, {
    headerMode: 'none',
});


export default () => (
    <Root
        onNavigationStateChange={(prevState, currentState) => {
            const currentScreen = getCurrentRouteName(currentState);
            const prevScreen = getCurrentRouteName(prevState);
            //
            // if (prevScreen !== currentScreen) {
            //     track(currentScreen);
            // }
        }}
    />
);
