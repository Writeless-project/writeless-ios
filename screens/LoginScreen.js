import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import getTheme from '../native-base-theme/components';
import { StyleProvider, Container, Content, Form, Item, Input, Button, Text } from 'native-base';

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login Screen',
  };

    render() {
      return (
        <StyleProvider style={getTheme()}>
          <Container>
            <Content>
              <Form>
                <Item>
                  <Input placeholder="Username" />
                </Item>
                <Item last>
                  <Input placeholder="Password" />
                </Item>
                <Button full style={myStyles}>
                  <Text>Submit</Text>
                </Button>
              </Form>
            </Content>
          </Container>
        </StyleProvider>
      );
    }
  }

  const myStyles = StyleSheet.create({
    marginTop: 20,
    margin: 20
  });
