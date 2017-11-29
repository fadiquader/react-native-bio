import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Dimensions,
} from 'react-native';

import {MainRoutes} from '../../navigation/routes';
const paddingValue = 8;

export class GridV1 extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Grid Menu'.toUpperCase(),
    });

    constructor(props) {
        super(props);
    }


    _calculateItemSize() {
        let {height, width} = Dimensions.get('window');
        return (width - paddingValue * 6) / 2;
    }

    render() {
        let size = this._calculateItemSize();
        let navigate = this.props.navigation.navigate;

        let items = MainRoutes.map(function (route, index) {
            return (
                <TouchableOpacity
                    style={{width: size, height: size}}
                    key={index}
                    onPress={() => {
                        navigate(route.id)
                    }}>

                    <Text style={styles.icon}>
                        {route.icon}
                    </Text>
                    <Text>{route.title}</Text>

                </TouchableOpacity>
            )
        });


        return (
            <ScrollView style={styles.root}
                        contentContainerStyle={styles.rootContainer}>
                {items}
            </ScrollView>
        )
    }
}

let styles = StyleSheet.create({
    root: {
        backgroundColor: '#eeeeee',
        padding: paddingValue,
    },
    rootContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    icon: {
        marginBottom: 16
    }
});