import {FontIcons} from '../assets/icons';
import * as Screens from '../screens/index';
import _ from 'lodash';

export const MainRoutes = [
    {
        id: 'LoginMenu',
        title: 'Auth',
        icon: FontIcons.login,
        screen: Screens.LoginMenu,
        children: [
            {
                id: 'Login1',
                title: 'Login',
                screen: Screens.Login1,
                children: []
            },
            {
                id: 'SignUp',
                title: 'Sign Up',
                screen: Screens.SignUp,
                children: []
            }
        ]
    },
    {
        id: 'NavigationMenu',
        icon: FontIcons.navigation,
        title: 'Navigation',
        screen: Screens.NavigationMenu,
        children: [
            {
                id: 'GridV1',
                title: 'Grid Menu V1',
                screen: Screens.GridV1,
                children: []
            },
            {
                id: 'GridV2',
                title: 'Grid Menu V2',
                screen: Screens.GridV2,
                children: []
            },
            {
                id: 'List',
                title: 'List Menu',
                screen: Screens.ListMenu,
                children: []
            },
            {
                id: 'Side',
                title: 'Side Menu',
                action: 'DrawerOpen',
                screen: Screens.SideMenu,
                children: []
            }
        ]
    },
    {
        id: 'OtherMenu',
        title: 'Other',
        icon: FontIcons.other,
        screen: Screens.OtherMenu,
        children: [
            {
                id: 'Settings',
                title: 'Settings',
                screen: Screens.Settings,
                children: []
            }
        ]
    }
];

let menuRoutes = _.cloneDeep(MainRoutes);
// menuRoutes.unshift({
//     id: 'GridV2',
//     title: 'Start',
//     screen: Screens.GridV2,
//     children: []
// },);

export const MenuRoutes = menuRoutes;