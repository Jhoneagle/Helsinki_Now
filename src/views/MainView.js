import React, { Component } from 'react';
import { Container, Content, Text, Body, Button, Card, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';

export default class MainView extends Component {
  render(){
    return(
      <Container>
        <Content padder>
          <Card style={ styles.data }>
            <CardItem>
              <Body>
                <Text style={ styles.content }>
                  Select category...
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Button transparent style={ styles.navigationButton } onPress= {() => {Actions.placeCategoryView(); }}>
            <Body>
              <Text>
                Places
              </Text>
            </Body>
          </Button>
          <Button transparent style={ styles.navigationButton } onPress= {() => {Actions.eventCategoryView(); }}>
            <Body>
              <Text>
                Events
              </Text>
            </Body>
          </Button>
          <Button transparent style={ styles.navigationButton } onPress= {() => {Actions.activityCategoryView(); }}>
            <Body>
              <Text>
                Activities
              </Text>
            </Body>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  navigationButton: {
    alignSelf: 'center',
    margin: 30,
  },
  data: {
    margin: 1,
  },
  content: {
    alignSelf: 'center',
  },
});