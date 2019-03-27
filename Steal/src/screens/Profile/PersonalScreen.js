import React, { Component } from "react";
import {
  Form,
  Container,
  Header,
  Content,
  Body,
  Item,
  Input,
  Button,
  Text,
} from "native-base";

export default class PersonalScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      FirstName: '',
      LastName: '',
      AddressLine1: '',
      AddressLine2: '',
      City: '',
      PostCode: ''
    }
  }

  render() {
    return (
      <Container>
      <Content>
        <Form>
          <Item>
            <Input placeholder="First Name"
                   onChangeText={(text) => this.setState({text})}
                   />
          </Item>
          <Item>
            <Input placeholder="Last Name" />
          </Item>
          <Item>
          <Input placeholder="Address line 1" />
          </Item>
          <Item>
            <Input placeholder="Address line 2" />
          </Item>
          <Item>
            <Input placeholder="Town/City" />
          </Item>
          <Item>
            <Input placeholder="PostCode" />
          </Item>
        </Form>
        </Content>
      </Container>
    );
  }
}
