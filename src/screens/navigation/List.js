import React from 'react';
import {
    ListView,
    TouchableHighlight,
    View,
    Text,
    StyleSheet
} from 'react-native';
import {MainRoutes} from '../../navigation/routes';

export class ListMenu extends React.Component {
    static navigationOptions = {
        title: 'List Menu'.toUpperCase()
    };

    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.data = ds.cloneWithRows(MainRoutes);
        this.renderRow = this._renderRow.bind(this);
    }

    _renderRow(row) {
        return (
            <TouchableHighlight
                style={styles.item}
                activeOpacity={1}
                onPress={() => {
                    this.props.navigation.navigate(row.id)
                }}>
                <View style={styles.container}>
                    <Text style={styles.icon}
                            >{row.icon}</Text>
                    <Text>{row.title}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <ListView
                style={styles.list}
                dataSource={this.data}
                renderRow={this.renderRow}
            />
        )
    }
}

let styles = StyleSheet.create({
    item: {
        height: 80,
        justifyContent: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#aaa',
        paddingHorizontal: 16
    },
    list: {
        backgroundColor: 'white',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 34,
        textAlign: 'center',
        marginRight: 16
    }
});