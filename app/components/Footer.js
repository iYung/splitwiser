import React, { useState } from "react";
import { Text } from "native-base";
import {
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  View,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewExpenseModal,
  setNewRecurringExpenseModal,
} from "../redux/actions";

import BottomNav from "./BottomNav";
import MonthPicker from "./MonthPicker";

export default function Footer() {
  const [selected2, setCount] = useState(undefined);
  const tabState = useSelector((state) => state.tabs);
  const dispatch = useDispatch();
  return (
    <View>
      {tabState.tab == 0 && (
        <TouchableOpacity onPress={() => dispatch(setNewExpenseModal(true))}>
          <View
            style={{
              height: 60,
              backgroundColor: "#95d3f8",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Add a New Expense</Text>
          </View>
        </TouchableOpacity>
      )}
      {tabState.tab == 1 && (
        <TouchableOpacity
          onPress={() => dispatch(setNewRecurringExpenseModal(true))}
        >
          <View
            style={{
              height: 60,
              backgroundColor: "#95d3f8",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Add a New Recurring Expense</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
