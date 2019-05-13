import React, {Component} from 'react';
import { Card, CardItem, Container, Content, Text, List, ListItem, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet} from 'react-native';
import {Actions} from "react-native-router-flux";
import Waiting from "../components/Waiting";

export default class PlaceCategoryView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      filter: '',
      loading: true,
      dataSource: []
    };
  }
  
  componentDidMount(){
    fetch("http://open-api.myhelsinki.fi/v1/places/")
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          dataSource: responseJson['tags']
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
  
    return(
      <Container>
        <Content padder>
          <List dataArray={Object.keys(dataSource)}
                renderRow={(key) =>
                  <ListItem>
                    <Content>
                      <Card>
                        <CardItem button onPress= {() => {Actions.PlacesView({value: dataSource[key]}); }}>
                          <Text style={ styles.content }>
                            {dataSource[key]}
                          </Text>
                          <Right>
                            <Icon name="arrow-right" size={24} />
                          </Right>
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
  content: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});