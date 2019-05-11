import React, {Component} from 'react';
import { Body, Card, CardItem, Container, Content, Text, List, ListItem } from 'native-base';
import {StyleSheet} from 'react-native';
import {Actions} from "react-native-router-flux";

export default class ActivityCategoryView extends Component {
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
            <Card style={ styles.data }>
              <CardItem>
                <Body>
                  <Text style={ styles.warning }>
                    Loading... Pls wait!
                  </Text>
                </Body>
              </CardItem>
            </Card>
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
                          <CardItem button onPress= {() => {Actions.pop(); }}>
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