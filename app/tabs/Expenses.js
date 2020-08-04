import React, { useState } from "react";
import {
  Container,
  Text,
  Fab,
  List,
  Icon,
  Item,
  Left,
  Thumbnail,
  Body,
  Right,
  Picker,
  ListItem,
  Button,
} from "native-base";
import {
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  View,
} from "react-native";
import ExpenseItem from "../components/ExpenseItem";

import { SwipeListView } from "react-native-swipe-list-view";
import MonthPicker from "../components/MonthPicker";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default function Expenses() {
  const [refreshing, setRefreshing] = React.useState(false);

  return (
    <View>
      <List>
        <ListItem itemDivider>
          <Text>Ivan owes Amanda</Text>
        </ListItem>
        <ListItem>
          <Text>$100</Text>
        </ListItem>
        <MonthPicker />
        <ListItem itemDivider>
          <Text>Expenses</Text>
        </ListItem>
        <ExpenseItem
          title="Rent"
          month="August"
          day="1"
          payer="Ivan"
          amount="$100"
          totalAmount="$1000"
          id="123"
        />
        <ExpenseItem
          title="Rent"
          month="August"
          day="1"
          payer="Ivan"
          amount="$100"
          totalAmount="$1000"
          id="123"
        />
        <ExpenseItem
          title="Rent"
          month="August"
          day="1"
          payer="Ivan"
          amount="$100"
          totalAmount="$1000"
          id="123"
        />
      </List>
    </View>
  );
}
