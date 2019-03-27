import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Header, Body, Content, Form, Item, Input} from 'native-base';

export default class componentName extends Component {
  render() {
    return (
        <Container>
        <Header />
        <Content>
          <Body>
            <Form>
              <Item>
                <Input placeholder="Full Name" />
              </Item>
              <Item>
                <Input placeholder="Credit Card Number" />
              </Item>
              <Item>
                <Input placeholder="Expiry Date" />
              </Item>
              <Item>
                <Input placeholder="Security number" />
              </Item>
            </Form>
          </Body>
        </Content>
      </Container>
    )
  }
}