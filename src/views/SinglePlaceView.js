import React, {Component} from 'react';
import { Card, CardItem, Container, Content, Text } from 'native-base';
import { Linking, StyleSheet } from 'react-native';
import PlaceOpenStatus from "../components/PlaceOpenStatus";
import Info from "../components/Info";
import Header from "../components/Header";

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
        <Header content={object.name.fi} />
  
        <Content padder>
          <Info intro={object.description.intro} description={object.description.body} url={object.info_url} />
          
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
            <CardItem>
              <PlaceOpenStatus item={object} day={dayNumber} date={date} />
            </CardItem>
          </Card>
  
          <Card>
            <CardItem header>
              <Text style={ styles.h3 }>
                This week
              </Text>
            </CardItem>
            <CardItem>
              <Text style={ styles.weekdays }>
                Monday:
              </Text>
              <PlaceOpenStatus item={object} day={0} />
            </CardItem>
            <CardItem>
              <Text style={ styles.weekdays }>
                Tuesday:
              </Text>
              <PlaceOpenStatus item={object} day={1} />
            </CardItem>
            <CardItem>
              <Text style={ styles.weekdays }>
                Wednesday:
              </Text>
              <PlaceOpenStatus item={object} day={2} />
            </CardItem>
            <CardItem>
              <Text style={ styles.weekdays }>
                Thursday:
              </Text>
              <PlaceOpenStatus item={object} day={3} />
            </CardItem>
            <CardItem>
              <Text style={ styles.weekdays }>
                Friday:
              </Text>
              <PlaceOpenStatus item={object} day={4} />
            </CardItem>
            <CardItem>
              <Text style={ styles.weekdays }>
                Saturday:
              </Text>
              <PlaceOpenStatus item={object} day={5} />
            </CardItem>
            <CardItem>
              <Text style={ styles.weekdays }>
                Sunday:
              </Text>
              <PlaceOpenStatus item={object} day={6} />
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
  address: {
    alignSelf: 'center',
    fontSize: 18,
  },
  weekdays: {
    alignSelf: 'center',
    fontSize: 18,
  },
});