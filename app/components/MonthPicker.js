import React, { useState } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Right,
  Body,
  Icon,
  Text,
  ListItem,
  Picker,
  Item,
  List,
  Fab,
} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { changeTab } from "../redux/actions";
import { View } from "react-native";
import BottomNav from "./BottomNav";

export default function MonthPicker() {
  const [selected2, setCount] = useState(undefined);
  const tabState = useSelector((state) => state.tabs);
  const dispatch = useDispatch();
  return (
      <List>
        <ListItem itemDivider>
          <Text>Month</Text>
        </ListItem>
        <Item picker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined }}
            placeholder="Select your SIM"
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff"
            selectedValue={selected2}
            onValueChange={(value) => setCount(value)}
          >
            <Picker.Item label="January" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
            <Picker.Item label="Debit Card" value="key2" />
            <Picker.Item label="Credit Card" value="key3" />
            <Picker.Item label="Net Banking" value="key4" />
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
            selectedValue={selected2}
            onValueChange={(value) => setCount(value)}
          >
            <Picker.Item label="Wallet" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
            <Picker.Item label="Debit Card" value="key2" />
            <Picker.Item label="Credit Card" value="key3" />
            <Picker.Item label="Net Banking" value="key4" />
          </Picker>
        </Item>
      </List>
  );
}
