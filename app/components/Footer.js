import React from "react";
import { Text } from "native-base";
import { TouchableOpacity, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewExpenseModal,
  setNewRecurringExpenseModal,
  getPreviousEntry,
} from "../redux/actions";

export default function Footer() {
  const tabState = useSelector((state) => state.tabs);
  const dispatch = useDispatch();
  return (
    <View>
      {tabState.tab == 0 && (
        <TouchableOpacity
          onPress={() => {
            dispatch(setNewExpenseModal(true));
            dispatch(getPreviousEntry());
          }}
        >
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
          onPress={() => {
            dispatch(setNewRecurringExpenseModal(true));
            dispatch(getPreviousEntry());
          }}
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
