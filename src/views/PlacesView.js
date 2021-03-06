import React, {Component} from 'react';
import { Card, CardItem, Container, Content, Text, List, ListItem, Badge, Right } from 'native-base';
import {StyleSheet} from 'react-native';
import {Actions} from "react-native-router-flux";
import Waiting from "../components/Waiting";
import { hoursFromStringToInt } from "../utils";
import PlaceOpenStatus from "../components/PlaceOpenStatus";

export default class PlacesView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      filter: '',
      loading: true,
      dataSource: []
    };
  }
  
  componentDidMount(){
    fetch("http://open-api.myhelsinki.fi/v1/places/?tags_search=" + this.props.value)
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          dataSource: responseJson['data']
        })
      })
      .catch(error => console.log(error)) //to catch the errors if any
  }
  
  render() {
    if(this.state.loading) {
      return(
        <Container>
          <Content padder>
            <Waiting />
          </Content>
        </Container>
      )
    }
  
    const {dataSource} = this.state;
    const date = new Date();
    let dayNumber = date.getDay();
    if (dayNumber > 0) {
      dayNumber--;
    } else {
      dayNumber = 6;
    }
    
    return (
      <Container>
        <Content padder>
          <Text style={ styles.header }>
            { dataSource.length === 0 ? 'No places found right now...' : ('Found ' + dataSource.length + ' results') }
          </Text>
          <List dataArray={dataSource}
                renderRow={(item) =>
                  <ListItem>
                    <Content>
                      <Card>
                        <CardItem button onPress= {() => {Actions.SinglePlaceView({value: item}); }}>
                          <Text style={ styles.name }>
                            {item.name.fi}
                          </Text>
                        </CardItem>
                        {item.location.address.street_address == null ? <CardItem/> :
                          <CardItem>
                            <Text style={ styles.address }>
                              {item.location.address.street_address}, {item.location.address.locality}
                            </Text>
                          </CardItem>
                        }
  
                        <PlaceOpenStatus item={item} day={dayNumber} date={date} />
                      </Card>
                    </Content>
                  </ListItem>
                }>
          </List>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  name: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 21,
  },
  address: {
    alignSelf: 'center',
    fontSize: 18,
  },
});