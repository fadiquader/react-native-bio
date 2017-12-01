import axios from 'axios';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import {
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    Dimensions,
    StatusBar,
    AsyncStorage
} from 'react-native';
import {
    Container,
    Header, Content, Footer,
    FooterTab, Button, Icon,
    Text, Form, Item, Input, Label,
    Radio,
    Tab, Tabs,
} from 'native-base';
import {NavigationActions} from 'react-navigation';

import { doFacebookLogin, facebookLoginFailed, facebookLoginSuccess } from '../../reducers/auth'
import { Facebook } from 'expo';

class Login extends Component {
    // static navigationOptions = {
    //     header: null,
    // };
    constructor(props) {
        super(props);
    };
    async componentWillMount(){
        const token = await AsyncStorage.getItem('fb_token')
        if(token) {

        }
    }
    facbookLogin = async () => {
        const { type, token } = await Facebook.logInWithReadPermissionsAsync('595100564154282', {
            permissions: ['public_profile']
        });
        if(type === 'cancel') {
            this.props.facebookLoginFailed();
            return;
        }
        const { data } = await axios.get(`https://graph.facebook.com/me?access_token=${token}`);
        await AsyncStorage.setItem('fb_token', token);
        this.props.facebookLoginSuccess(data);
        this.goToHome()
    };

    goToHome = () => {
        let toHome = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Home'})]
        });
        this.props.navigation.dispatch(toHome)
    };

    render() {
        return (
            <Container>
                <Content>
                    {/*<Form>*/}
                        {/*<Item floatingLabel>*/}
                            {/*<Label>Username</Label>*/}
                            {/*<Input />*/}
                        {/*</Item>*/}
                        {/*<Item floatingLabel last>*/}
                            {/*<Label>Password</Label>*/}
                            {/*<Input />*/}
                        {/*</Item>*/}
                    {/*</Form>*/}

                    <TouchableOpacity  onPress={this.props.doFacebookLogin}>
                        <Text>Facebook Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text>Sign Up</Text>
                    </TouchableOpacity>
                </Content>

            </Container>
        );
    }
}

const mapState = ({ auth }) => ({ auth });

const mapDispatch = dispatch => {
    return bindActionCreators({
        doFacebookLogin,
        facebookLoginFailed,
        facebookLoginSuccess
    }, dispatch)
};

const Login2 = connect(mapState, mapDispatch)(Login);

export { Login2 };