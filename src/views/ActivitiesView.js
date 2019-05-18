import React, {Component} from 'react';
import { Card, CardItem, Container, Content, Text, List, ListItem } from 'native-base';
import {StyleSheet} from 'react-native';
import {Actions} from "react-native-router-flux";
import Waiting from "../components/Waiting";
import { cleanHTML } from "../utils";

export default class ActivitiesView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      filter: '',
      loading: true,
      dataSource: []
    };
  }
  
  componentDidMount(){
    fetch("http://open-api.myhelsinki.fi/v1/activities/?tags_search=" + this.props.value)
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
            { dataSource.length === 0 ? 'No activities found right now...' : ('Found ' + dataSource.length + ' results') }
          </Text>
          <List dataArray={dataSource}
                renderRow={(item) =>
                  <ListItem>
                      <Content>
                        <Card>
                          <CardItem button onPress= {() => {Actions.SingleActivityView({value: item}); }}>
                            <Text style={ styles.name }>
                              {item.name.fi}
                            </Text>
                          </CardItem>
                          <CardItem>
                            <Text numberOfLines={5}>
                              {cleanHTML(item.description.body)}
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
  }
});