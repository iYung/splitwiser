import React from "react";
import { Text, Icon, Body, Right, ListItem, Button } from "native-base";
import { View } from "react-native";

import { useDispatch } from "react-redux";
import { setDeleteModal } from "../redux/actions";

export default function ExpenseItem(props) {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <View style={{ flexDirection: "row" }}>
        <Body>
  <Text>{props.title}</Text>
          <Text note>{props.month} {props.day} by {props.payer}</Text>
        </Body>
        <Right style={{ paddingRight: 19 }}>
          <Text note>{props.amount}</Text>
          <Text note>{props.totalAmount}</Text>
        </Right>
        <Button onPress={() => dispatch(setDeleteModal(true, props.id, props.title))}>
          <Icon name="md-trash" />
        </Button>
      </View>
    </ListItem>
  );
}
