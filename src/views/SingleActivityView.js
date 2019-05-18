import React, {Component} from 'react';
import {Card, CardItem, Container, Content, Text} from 'native-base';
import {Linking, StyleSheet} from 'react-native';
import {checkUrl, cleanHTML } from "../utils";

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
                Description
              </Text>
            </CardItem>
            
            {object.info_url == null ? <CardItem/> :
              <CardItem>
                <Text>
                  {object.description.intro}
                </Text>
              </CardItem>
            }
            
            <CardItem>
              <Text>
                {cleanHTML(object.description.body)}
              </Text>
            </CardItem>
            
            {object.info_url == null ? <CardItem/> :
              <CardItem footer>
                <Text style={ styles.link }>
                  For more <Text style={{color: 'blue'}} onPress={() => Linking.openURL(checkUrl(object.info_url))}>information</Text>.
                </Text>
              </CardItem>
            }
          </Card>
          
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
  link: {
    alignSelf: 'center',
    fontSize: 16,
  },
});