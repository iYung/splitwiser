import React, { useState } from "react";
import {
  Container,
  Text,
  Fab,
  List,
  Icon,
  Item,
  Picker,
  ListItem,
} from "native-base";
import {
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  View,
} from "react-native";

import { SwipeListView } from "react-native-swipe-list-view";
import ExpenseItem from "../components/ExpenseItem";

export default function Monthly() {
  const [listData, setListData] = useState(
    Array(5)
      .fill("")
      .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
  );

  return (
    <View>
      <List>
        <ListItem itemDivider>
          <Text>Monthly Expenses</Text>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  backTextWhite: {
    color: "#FFF",
  },
  rowFront: {
    alignItems: "center",
    textAlign: "left",
    backgroundColor: "#fff",
    borderBottomColor: "#d3d3d3",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 50,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: "blue",
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
  },
});
