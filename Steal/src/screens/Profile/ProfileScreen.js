import React, { Component } from "react";
import { View } from "react-native";
import {
  Container,
  Header,
  Title,
  Text,
  Body,
  Segment,
  Button,
  Left,
  Tab,
  Tabs,
  Right,
  Icon
} from "native-base";
import BillingScreen from "./BillingScreen";
import PersonalScreen from "./PersonalScreen";
export default class ProfileScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Title> Profile </Title>
          </Left>
          <Body />
          <Right>
            <Icon name="search" />
          </Right>
        </Header>
        <Tabs>
          <Tab heading="Billing">
            <BillingScreen />
          </Tab>
          <Tab heading="Personal">
            <PersonalScreen />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
