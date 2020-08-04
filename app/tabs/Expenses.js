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
  const [selected2, setCount] = useState(undefined);

  const [listData, setListData] = useState(
    Array(15)
      .fill("")
      .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
  );

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = (rowKey) => {
    console.log("This row opened", rowKey);
  };

  const renderItem = (data) => (
    <View style={styles.rowFront}>
      <Text>I am {data.item.text} in a SwipeListView</Text>
    </View>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, data.item.key)}
      >
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

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
