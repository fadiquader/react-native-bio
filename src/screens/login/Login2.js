import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import {
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    Dimensions,
    StatusBar
} from 'react-native';
import {
    Container,
    Header, Content, Footer,
    FooterTab, Button, Icon,
    Text, Form, Item, Input, Label,
    Radio,
    Tab, Tabs,
} from 'native-base';
import { doFacebookLogin } from '../../reducers/auth'

class Login extends Component {
    // static navigationOptions = {
    //     header: null,
    // };
    constructor(props) {
        super(props);
    }

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

const mapDispatch = dispatch => {
    return bindActionCreators({
        doFacebookLogin
    }, dispatch)
}
const Login2 = connect(undefined, mapDispatch)(Login);

export { Login2 };