import React, {Component} from 'react';
import { Card, CardItem, Container, Content, Text, List, ListItem } from 'native-base';
import {StyleSheet} from 'react-native';
import {Actions} from "react-native-router-flux";
import Waiting from "../components/Waiting";

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
                          <Text style={ styles.content }>
                            {item.name.fi}
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
  navigationButton: {
    alignSelf: 'center',
    margin: 30,
  },
  data: {
    margin: 1,
  },
  content: {
    alignSelf: 'center',
    fontSize: 16,
  },
  warning: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 21,
  }
});