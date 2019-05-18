import React, {Component} from 'react';
import { Card, CardItem, Container, Content, Text } from 'native-base';
import { StyleSheet, Linking } from 'react-native';
import { parseTimeStamp } from "../utils";
import Info from "../components/Info";
import Header from "../components/Header";

export default class SingleEventView extends Component {
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