import React, { Component } from 'react';
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
    Tab, Tabs
} from 'native-base';

export class Login1 extends Component {
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
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Radio selected={true} />

                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text>Sign Up</Text>
                    </TouchableOpacity>
                </Content>

            </Container>
        );
    }
}
