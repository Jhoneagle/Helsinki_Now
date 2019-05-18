import { Badge, CardItem, Right, Text, Content } from "native-base";
import { hoursFromStringToInt } from "../utils";
import React, {Component}  from "react";
import { StyleSheet } from "react-native";

export default class PlaceOpenStatus extends Component {
  render() {
    const object = this.props.item;
    const dayNumber = this.props.day;
    const date = this.props.date;
    
    return (
      <Content padder>
        {object.opening_hours.hours == null ?
          <CardItem><Text>No info available!</Text></CardItem> :
          (
            <CardItem>
              <Text style={ styles.time }>
                {object.opening_hours.hours[dayNumber].open24h ? 'Open hole day!' :
                  (hoursFromStringToInt(object.opening_hours.hours[dayNumber].opens) == null ? 'Closed hole day' :
                      'Open: ' + hoursFromStringToInt(object.opening_hours.hours[dayNumber].opens) + '-'
                      + hoursFromStringToInt(object.opening_hours.hours[dayNumber].closes)
                  )
                }
              </Text>
              {date == null ? <Right/> :
                <Right>
                  {hoursFromStringToInt(object.opening_hours.hours[dayNumber].opens) == null ?
                    <Badge danger>
                      <Text>Closed</Text>
                    </Badge> :
                    (hoursFromStringToInt(object.opening_hours.hours[dayNumber].opens) < hoursFromStringToInt(object.opening_hours.hours[dayNumber].closes) ?
                      (hoursFromStringToInt(object.opening_hours.hours[dayNumber].opens) <= date.getHours() &&
                      hoursFromStringToInt(object.opening_hours.hours[dayNumber].closes) > date.getHours() ?
                        <Badge success>
                          <Text>Open</Text>
                        </Badge> :
                        <Badge danger>
                          <Text>Closed</Text>
                        </Badge>) :
                      (hoursFromStringToInt(object.opening_hours.hours[dayNumber].opens) <= date.getHours() ||
                      hoursFromStringToInt(object.opening_hours.hours[dayNumber].closes) > date.getHours() ?
                        <Badge success>
                          <Text>Open</Text>
                        </Badge> :
                        <Badge danger>
                          <Text>Closed</Text>
                        </Badge>)
                    )
                  }
                </Right>
              }
            </CardItem>
          )
        }
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  time: {
    alignSelf: 'center',
    fontSize: 16,
  },
});