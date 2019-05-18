import React, {Component} from 'react';
import { Text } from "native-base";
import {StyleSheet} from "react-native";

export default class Header extends Component {
  render() {
    return (
      <Text style={ styles.h1 }>
        {this.props.content}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  h1: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
});