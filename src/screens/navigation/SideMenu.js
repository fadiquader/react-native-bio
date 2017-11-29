import React from 'react';
import {
    TouchableHighlight,
    View,
    Text,
    ScrollView,
    Image,
    Platform,
    StyleSheet
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import ListItem from '../../components/NativeTouchable/ListItem'
import {MainRoutes} from '../../navigation/routes';
import {FontAwesome} from '../../assets/icons';

// custom nav drawer
//https://github.com/react-community/react-navigation/blob/master/src/views/Drawer/DrawerNavigatorItems.js

const routesMenu = [
    {
        id: 'Auth',
        title: 'Auth',
        icon: ''
    },
    {
        id: 'Navigation',
        title: 'Navigation',
        icon: ''
    },
    {
        id: 'Other',
        title: 'Other',
        icon: ''
    },
    {
        id: 'Blog',
        title: 'Blog',
        icon: ''
    },
    {
        id: 'Chat',
        title: 'Chat',
        icon: ''
    },
]
export class SideMenu extends React.Component {
    // static navigationOptions: ({navigation, screenProps}) => {
    //     console.log(screenProps);
    // };
    constructor(props) {
        super(props);
        this._navigateAction = this._navigate.bind(this);
        this.activeRoute = 'home';
    }

    _navigate(route) {

        this.props.navigation.dispatch(NavigationActions.navigate({routeName: route.id}));
        // let resetAction = NavigationActions.reset({
        //     index: 0,
        //     actions: [
        //         NavigationActions.navigate({routeName: route.id})
        //     ]
        // });
        // setTimeout(() => this.props.navigation.dispatch(resetAction), 500)
    }

    _renderIcon() {
        return <Image style={styles.icon} source={require('../../assets/images/smallLogo.png')}/>;

    }
    renderMenu = () => {
        const { activeItemKey } = this.props;
        return routesMenu.map(route => {
            const active = activeItemKey === route.id;
            return (
                <ListItem
                    key={route.id}
                    onPress={() => this._navigateAction(route)} >
                    <View style={[styles.content,  active && styles.active || {}]}>
                        <View style={styles.content}>
                            <Text style={styles.icon}>Icon </Text>
                            <Text>{ route.title }</Text>
                        </View>
                    </View>
                </ListItem>
            )
        })
    };

    render() {
        // console.log('items ', this.props.items)
        console.log('activeItemKey ', this.props.activeItemKey)
        // let menu = MainRoutes.map((route, index) => {
        //     const active = this.activeRoute === route.id;
        //     console.log( route.id);
        //     return (
        //         <ListItem
        //             key={route.id}
        //             onPress={() => this._navigateAction(route)} >
        //             <View style={[styles.content, active && styles.active || {}]}>
        //                 <View style={styles.content}>
        //                     <Text style={styles.icon}>{route.icon}</Text>
        //                     <Text>{route.title}</Text>
        //                 </View>
        //                 <Text>{FontAwesome.chevronRight}</Text>
        //             </View>
        //         </ListItem>
        //     )
        // });
        // console.log('screenProps ', this.props.router.getScreenOptions())
        return (
            <View style={styles.root}>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <View style={[styles.container, styles.content]}>
                        {this._renderIcon()}
                        <Text >UI Kitten</Text>
                    </View>
                    { this.renderMenu() }
                </ScrollView>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        height: 80,
        paddingHorizontal: 16,
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    root: {
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
        backgroundColor: 'white'
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 8
    },
    active: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        borderRightWidth: 4,
        borderRightColor: '#009688'
    },
    icon: {
        marginRight: 13,
    }
});
