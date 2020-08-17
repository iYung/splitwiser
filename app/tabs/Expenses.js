import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import MonthPicker from "../components/MonthPicker";
import { getTotal } from "../redux/actions";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default function Expenses() {
  const dispatch = useDispatch();

  const totalState = useSelector((state) => state.total);

  useEffect(() => {
    dispatch(getTotal());
  }, []);

  return (
    <View>
      <List>
        <ListItem itemDivider>
          <Text>Ivan owes Amanda</Text>
        </ListItem>
        <ListItem>
          <Text>${totalState.total}</Text>
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
