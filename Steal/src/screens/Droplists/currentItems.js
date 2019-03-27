import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Content, Image, Card, CardItem, Header, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'
//import { productNumber } from '../../services/products';


export default class currentItems extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    generateList = () => {
        fetch("http://192.168.43.196:3000/supreme/products/", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
            //   body: JSON.stringify({
            //     firstParam: 'yourValue',
            //     secondParam: 'yourOtherValue',
            //   }),
          }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                return responseJson;
            }).catch((error) => {
                console.error(error);
            });
    }

  render() {
    return (
        <Container>
            <Header>
                <Text>Droplist</Text>
            </Header>
            <Content>
                <Card>
                    <CardItem>
                        <Body>
                            <Text> PRODUCT NAME </Text>
                        </Body>
                    </CardItem>
                    <CardItem cardBody>
                        {/* <Image source={{uri: IMAGE}} /> */}
                    </CardItem>
                    <CardItem>
                        <Right>
                            <Button transparent
                                onPress={this.generateList}>
                                <Text> + Button </Text> 
                            </Button>
                        </Right>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
  }
}