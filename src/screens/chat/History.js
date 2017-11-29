import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Dimensions,
    StatusBar,
    Platform,
    Animated,
    ScrollView
} from 'react-native';
import { Icon, Text } from 'native-base';
import { ScrollableBar } from '../../components/NavBar';

const NAVBAR_HEIGHT = 64;
const STATUS_BAR_HEIGHT = Platform.select({ ios: 20, android: 24 });

export class History extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
        gesturesEnabled: false,
        header: (headerProps) => {
            const { params } = navigation.state;
            return <ScrollableBar  navigation={navigation}
                                   headerProps={headerProps}
                                   clampedScroll={params && params.clampedScroll || null}
            />
        }
    });
    _clampedScrollValue = 0;
    _offsetValue = 0;
    _scrollValue = 0;

    constructor() {
        super();
        const scrollAnim = new Animated.Value(0);
        const offsetAnim = new Animated.Value(0);
        this.state = {
            scrollY: new Animated.Value(0),
            scrollAnim,
            offsetAnim,
            clampedScroll: Animated.diffClamp(
                Animated.add(
                    scrollAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                        extrapolateLeft: 'clamp',
                    }),
                    offsetAnim,
                ),
                0,
                NAVBAR_HEIGHT - STATUS_BAR_HEIGHT,
            )
        };
    }
    componentWillMount() {
        const { clampedScroll } = this.state;
        this.props.navigation.setParams({
            clampedScroll
        });
    }
    componentDidMount() {
        this.state.scrollAnim.addListener(({ value }) => {
            // This is the same calculations that diffClamp does.
            const diff = value - this._scrollValue;
            this._scrollValue = value;
            this._clampedScrollValue = Math.min(
                Math.max(this._clampedScrollValue + diff, 0),
                NAVBAR_HEIGHT - STATUS_BAR_HEIGHT,
            );
        });
        this.state.offsetAnim.addListener(({ value }) => {
            this._offsetValue = value;
        });
    }

    componentWillUnmount() {
        // Don't forget to remove the listeners!
        this.state.scrollAnim.removeAllListeners();
        this.state.offsetAnim.removeAllListeners();
    }
    _onScrollEndDrag = () => {
        this._scrollEndTimer = setTimeout(this._onMomentumScrollEnd, 250);
    };

    _onMomentumScrollBegin = () => {
        clearTimeout(this._scrollEndTimer);
    };

    _onMomentumScrollEnd = () => {
        const toValue = this._scrollValue > NAVBAR_HEIGHT &&
        this._clampedScrollValue > (NAVBAR_HEIGHT - STATUS_BAR_HEIGHT) / 2
            ? this._offsetValue + NAVBAR_HEIGHT
            : this._offsetValue - NAVBAR_HEIGHT;

        Animated.timing(this.state.offsetAnim, {
            toValue,
            duration: 350,
            useNativeDriver: true,
        }).start();
    };

    _renderScrollViewContent() {
        const data = Array.from({length: 30});
        return (
            <View style={{
                flex: 1
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
                scrollEventThrottle={1}
                onMomentumScrollBegin={this._onMomentumScrollBegin}
                onMomentumScrollEnd={this._onMomentumScrollEnd}
                onScrollEndDrag={this._onScrollEndDrag}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {y: this.state.scrollAnim }}}]
                )}
            >
                {this._renderScrollViewContent()}
            </ScrollView>
        )
    }
}
