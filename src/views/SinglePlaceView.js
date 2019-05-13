import React, {Component} from 'react';
import { Body, Card, CardItem, Container, Content, Text, List, ListItem } from 'native-base';
import {StyleSheet} from 'react-native';

export default class SinglePlaceView extends Component {
  render() {
    const object = this.props.value;
    
    return (
      <Container>
        <Content padder>
          <Text style={ styles.content }>
            {object.name.fi}
          </Text>
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
});