import React, {Component} from 'react';
import { Card, CardItem, Container, Content, Text } from 'native-base';
import { StyleSheet, Linking } from 'react-native';
import { checkUrl, cleanHTML, parseTimeStamp } from "../utils";

export default class SingleEventView extends Component {
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
            <CardItem>
              <Text>
                {object.description.intro}
              </Text>
            </CardItem>
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
                When and where
              </Text>
            </CardItem>
            {object.location.address.street_address == null ? <CardItem/> :
              <CardItem>
                <Text style={ styles.address }>
                  {object.location.address.street_address}, {object.location.address.locality}
                </Text>
              </CardItem>
            }
            <CardItem>
              <Text numberOfLines={2} style={ styles.time }>
    
                {parseTimeStamp(object.event_dates.starting_day)}
    
                {object.event_dates.ending_day == null ?
                  '' : (' - ' + parseTimeStamp(object.event_dates.ending_day))
                }
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