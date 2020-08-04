import React, { useState } from "react";
import {
  Icon,
  Text,
  ListItem,
  Picker,
  Item,
  List,
} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { View } from "react-native";

export default function MonthPicker() {
  const date = new Date();
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [year, setYear] = useState(date.getFullYear());
  const tabState = useSelector((state) => state.tabs);
  const dispatch = useDispatch();
  return (
    <List>
      <ListItem itemDivider>
        <Text>Month</Text>
      </ListItem>
      <View style={{ paddingLeft: 23 }}>
        <Item picker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined }}
            placeholder="Select your SIM"
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff"
            selectedValue={month.toString()}
            onValueChange={(value) => setMonth(parseInt(value))}
          >
            <Picker.Item label="January" value="1" />
            <Picker.Item label="February" value="2" />
            <Picker.Item label="March" value="3" />
            <Picker.Item label="April" value="4" />
            <Picker.Item label="May" value="5" />
            <Picker.Item label="June" value="6" />
            <Picker.Item label="July" value="7" />
            <Picker.Item label="August" value="8" />
            <Picker.Item label="September" value="9" />
            <Picker.Item label="October" value="10" />
            <Picker.Item label="November" value="11" />
            <Picker.Item label="December" value="12" />
          </Picker>
        </Item>
        <Item picker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined }}
            placeholder="Select your SIM"
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff"
            selectedValue={year.toString()}
            onValueChange={(value) => setYear(parseInt(value))}
          >
            <Picker.Item label="2019" value="2019" />
            <Picker.Item label="2020" value="2020" />
          </Picker>
        </Item>
      </View>
    </List>
  );
}
