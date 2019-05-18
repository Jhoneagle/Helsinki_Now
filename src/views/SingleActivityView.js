import React, {Component} from 'react';
import { Card, CardItem, Container, Content, Text } from 'native-base';
import { Linking, StyleSheet } from 'react-native';
import Info from "../components/Info";
import Header from "../components/Header";

export default class SingleActivityView extends Component {
  render() {
    const object = this.props.value;
    
    return (
      <Container>
        <Header content={object.name.fi} />
  
        <Content padder>
          <Info intro={object.description.intro} description={object.description.body} url={object.info_url} />
          
          <Card>
            <CardItem header>
              <Text style={ styles.h3 }>
                Details
              </Text>
            </CardItem>
            <CardItem>
              <Text style={ styles.content }>
                Where and when: {object.where_when_duration.where_and_when}
              </Text>
            </CardItem>
            <CardItem>
              <Text style={ styles.content }>
                Duration: {object.where_when_duration.duration}
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
  h3: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    alignSelf: 'center',
    fontSize: 16,
  },
});