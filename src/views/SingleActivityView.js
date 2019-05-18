import React, {Component} from 'react';
import {Card, CardItem, Container, Content, Text} from 'native-base';
import {Linking, StyleSheet} from 'react-native';
import {cleanHTML, parseTimeStamp} from "../utils";

export default class SingleActivityView extends Component {
  render() {
    const object = this.props.value;
    
    return (
      <Container>
        <Text style={ styles.h1 }>
          {object.name.fi}
        </Text>
        <Content padder>
          <Card>
            <CardItem header>
              <Text style={ styles.h3 }>
                Todo
              </Text>
            </CardItem>
          </Card>
          
          <Card>
            <CardItem header>
              <Text style={ styles.h3 }>
                Todo
              </Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    alignSelf: 'center',
    fontSize: 16,
  },
  h1: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  h3: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  time: {
    alignSelf: 'center',
    fontSize: 16,
  },
  link: {
    alignSelf: 'center',
    fontSize: 16,
  },
  address: {
    alignSelf: 'center',
    fontSize: 18,
  },
});