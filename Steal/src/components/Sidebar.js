import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem, Left, Icon } from "native-base";
const routes = ["Home", "Profile"];

import styles from './style';

const datas = [
  {
    name: "Home",
    route: "Home"
  },
  {
    name: "Profile",
    route: "Profile"
  },
  {
    name: "Steal",
    route: "Steal"
  },
  {
    name: "Shop",
    route: "Shop"
  },
  {
    name: "Droplist",
    route: "Droplist"
  }
];

export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
      <Content
        bounces={false}
        style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
      >
        <List
          dataArray={datas}
          renderRow={data =>
            <ListItem
              button
              noBorder
              onPress={() => this.props.navigation.navigate(data.route, {
                url: data.url
              })}
            >
              <Left>
                <Icon
                  active
                  name={data.icon}
                  style={{ color: "#777", fontSize: 26, width: 30 }}
                />
                <Text style={styles.text}>
                  {data.name}
                </Text>
              </Left>
              {data.types &&
                <Right style={{ flex: 1 }}>
                  <Badge
                    style={{
                      borderRadius: 3,
                      height: 25,
                      width: 72,
                      backgroundColor: data.bg
                    }}
                  >
                    <Text
                      style={styles.badgeText}
                    >{`${data.types} Types`}</Text>
                  </Badge>
                </Right>}
            </ListItem>}
        />
      </Content>
    </Container>
    );
  }
}
