import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Dimensions,
    StatusBar,
    Animated,
    ScrollView
} from 'react-native';
import { Icon, Text } from 'native-base';
import { CollapsableBar } from '../../components/NavBar';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export class Profile extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
        gesturesEnabled: false,
        header: (headerProps) => {
            // return <ToolBar navigation={navigation} headerProps={headerProps}/>
            const { params } = navigation.state;
            return <CollapsableBar navigation={navigation}
                                   headerProps={headerProps}
                                   scrollY={params && params.scrollY || null}
            />
        }
    });
    constructor() {
        super();
        this.state = {
            scrollY: new Animated.Value(0),
        };
    }
    componentWillMount() {
        const { scrollY } = this.state;
        this.props.navigation.setParams({
            scrollY
        });
    }
    _renderScrollViewContent() {
        const data = Array.from({length: 30});
        return (
            <View style={{
                marginTop: HEADER_MAX_HEIGHT
            }}>
                {data.map((_, i) =>
                    <View key={i} style={{
                        height: 40,
                        margin: 16,
                        backgroundColor: '#D3D3D3',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text>{i}</Text>
                    </View>
                )}
            </View>
        )
    }
    render() {
        return (
            <ScrollView
                style={ {
                    flex: 1,
                }}
                endFillColor={'#f00f00'}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
                )}
            >
                {this._renderScrollViewContent()}
            </ScrollView>
        )
    }
}
