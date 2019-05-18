import React, {Component} from 'react';
import {Badge, Card, CardItem, Container, Content, Right, Text} from 'native-base';
import {Linking, StyleSheet} from 'react-native';
import {checkUrl, cleanHTML, hoursFromStringToInt, parseTimeStamp} from "../utils";

export default class SinglePlaceView extends Component {
  render() {
    const object = this.props.value;
    const date = new Date();
    let dayNumber = date.getDay();
    if (dayNumber > 0) {
      dayNumber--;
    } else {
      dayNumber = 6;
    }
    
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
                Location
              </Text>
            </CardItem>
            
            {object.location.address.street_address == null ? <CardItem/> :
              <CardItem>
                <Text style={ styles.address }>
                  {object.location.address.street_address}, {object.location.address.locality}
                </Text>
              </CardItem>
            }
          </Card>
  
          <Card>
            <CardItem header>
              <Text style={ styles.h3 }>
                Today
              </Text>
            </CardItem>
  
            {object.opening_hours.hours == null ?
              <CardItem><Text>No info available!</Text></CardItem> :
              (
                <CardItem>
                  <Text style={ styles.time }>
                    {object.opening_hours.hours[dayNumber].open24h ? 'Open hole day!' :
                      (hoursFromStringToInt(object.opening_hours.hours[dayNumber].opens) == null ? 'Closed hole day' :
                          'Open: ' + hoursFromStringToInt(object.opening_hours.hours[dayNumber].opens) + '-'
                          + hoursFromStringToInt(object.opening_hours.hours[dayNumber].closes)
                      )
                    }
                  </Text>
                  <Right>
                    {hoursFromStringToInt(object.opening_hours.hours[dayNumber].opens) == null ?
                      <Badge danger>
                        <Text>Closed</Text>
                      </Badge> :
                      (hoursFromStringToInt(object.opening_hours.hours[dayNumber].opens) <= date.getHours() &&
                        hoursFromStringToInt(object.opening_hours.hours[dayNumber].closes) > date.getHours() ?
                          <Badge success>
                            <Text>Open</Text>
                          </Badge> :
                          <Badge danger>
                            <Text>Closed</Text>
                          </Badge>
                      )
                    }
                  </Right>
                </CardItem>
              )
            }
          </Card>
  
          <Card>
            <CardItem header>
              <Text style={ styles.h3 }>
                This week
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