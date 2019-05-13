import React, {Component} from 'react';
import { Container, Content, Text } from 'native-base';
import {StyleSheet} from 'react-native';

export default class SingleActivityView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      filter: ''
    };
  }
  
  render() {
    const object = this.props.value;
    
    return (
      <Container>
        <Content padder>
          <Text style={ styles.content }>
            {object.name.fi}
          </Text>
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