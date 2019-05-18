import React, {Component} from 'react';
import { Card, CardItem, Container, Content, Text, List, ListItem } from 'native-base';
import { StyleSheet } from 'react-native';
import {Actions} from "react-native-router-flux";
import Waiting from "../components/Waiting";
import { cleanHTML, parseTimeStamp } from "../utils";

export default class EventsView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      filter: '',
      loading: true,
      dataSource: []
    };
  }
  
  componentDidMount(){
    fetch("http://open-api.myhelsinki.fi/v1/events/?tags_search=" + this.props.value)
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
  
    return (
      <Container>
        <Content padder>
          <Text style={ styles.header }>
            { dataSource.length === 0 ? 'No events found right now...' : ('Found ' + dataSource.length + ' results') }
          </Text>
          <List dataArray={dataSource}
                renderRow={(item) =>
                  <ListItem>
                    <Content>
                      <Card>
                        <CardItem button onPress= {() => {Actions.SingleEventView({value: item}); }}>
                          <Text style={ styles.name }>
                            {item.name.fi}
                          </Text>
                        </CardItem>
                        <CardItem>
                          <Text numberOfLines={4}>
                            {cleanHTML(item.description.body)}
                          </Text>
                        </CardItem>
                        <CardItem>
                          <Text numberOfLines={2} style={ styles.time }>
                            {parseTimeStamp(item.event_dates.starting_day)}
                            
                            {item.event_dates.ending_day == null ?
                              '' : (' - ' + parseTimeStamp(item.event_dates.ending_day))
                            }
                          </Text>
                        </CardItem>
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
  },
  header: {
    fontWeight: 'bold',
    fontSize: 21,
  },
  time: {
    alignSelf: 'center',
    fontSize: 16,
  },
});