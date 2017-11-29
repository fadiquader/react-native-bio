import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import {Walkthrough} from './Walkthrough';
import {Walkthrough1} from './Walkthrough1';
import {Walkthrough2} from './Walkthrough2';
import PaginationIndicator from '../../components/PaginationIndicator';

export class WalkthroughScreen extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {index: 0};
    }

    changeIndex(index) {
        this.setState({index})
    }


    render() {
        return (
            <View style={styles.screen}>
                <Walkthrough onChanged={(index) => this.changeIndex(index)}>
                    <Walkthrough1/>
                    <Walkthrough2/>
                </Walkthrough>
                <PaginationIndicator length={2} current={this.state.index}/>
                <Button
                    style={styles.button}
                    title="GET STARTED"
                    onPress={() => {
                        this.props.navigation.goBack()
                    }} />
            </View>
        )
    }
}


let styles = StyleSheet.create({
    screen: {
        // backgroundColor: ''
        paddingVertical: 28,
        alignItems: 'center',
        flex: 1,
    },
    button: {
        marginTop: 25,
        marginHorizontal: 16,
    }
});