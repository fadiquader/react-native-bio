import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import {MainRoutes} from '../../navigation/routes';

export class GridV2 extends React.Component {
    static navigationOptions = {
        title: 'Grid Menu'.toUpperCase()
    };

    constructor(props) {
        super(props);
        this.state = {dimensions: undefined}
    };

    _onLayout = event => {
        if (this.state.height)
            return;
        let dimensions = event.nativeEvent.layout;
        this.setState({dimensions})
    };

    _getEmptyCount(size) {
        let rowCount = Math.ceil((this.state.dimensions.height - 20) / size);
        return rowCount * 3 - MainRoutes.length;
    };

    render() {
        let navigate = this.props.navigation.navigate;
        let items = <View/>;

        if (this.state.dimensions) {
            let size = this.state.dimensions.width / 3;
            let emptyCount = this._getEmptyCount(size);

            items = MainRoutes.map(function (route, index) {
                return (
                    <TouchableOpacity
                              style={{height: size, width: size}}
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

            for (let i = 0; i < emptyCount; i++) {
                items.push(<View key={'empty' + i} style={[{height: size, width: size}, styles.empty]}/>)
            }
        }

        return (
            <ScrollView
                style={styles.root}
                onLayout={this._onLayout}
                contentContainerStyle={styles.rootContainer}>
                {items}
            </ScrollView>
        );
    }
}

let styles = StyleSheet.create({
    root: {
        backgroundColor: '#eeeeee'
    },
    rootContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    empty: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#aaa'
    },
    icon: {
        marginBottom: 16
    }
});