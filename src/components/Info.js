import { CardItem, Text, Card} from "native-base";
import {checkUrl, cleanHTML } from "../utils";
import React, {Component}  from "react";
import {Linking, StyleSheet} from "react-native";

export default class Info extends Component {
  render() {
    return (
      <Card>
        <CardItem header>
          <Text style={ styles.h3 }>
            Description
          </Text>
        </CardItem>
    
        {this.props.intro == null ? <CardItem/> :
          <CardItem>
            <Text>
              {this.props.intro}
            </Text>
          </CardItem>
        }
    
        <CardItem>
          <Text>
            {cleanHTML(this.props.description)}
          </Text>
        </CardItem>
    
        {this.props.url == null ? <CardItem/> :
          <CardItem footer>
            <Text style={ styles.link }>
              For more <Text style={{color: 'blue'}} onPress={() => Linking.openURL(checkUrl(this.props.url))}>information</Text>.
            </Text>
          </CardItem>
        }
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  h3: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    alignSelf: 'center',
    fontSize: 16,
  },
});