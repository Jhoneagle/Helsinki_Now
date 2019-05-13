import {Body, Card, CardItem, Container, Content, Text} from "native-base";
import {StyleSheet} from "react-native";

export default class Waiting extends Component {
  render() {
    const object = this.props.value;
    
    return (
      <Card style={ styles.data }>
        <CardItem>
          <Body>
            <Text style={ styles.warning }>
              Loading... Pls wait!
            </Text>
          </Body>
        </CardItem>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  warning: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red',
  },
  data: {
    margin: 1,
  },
});