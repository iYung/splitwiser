import React, { useState } from "react";
import { Text } from "native-base";
import {
    StyleSheet,
    TouchableOpacity,
    RefreshControl,
    View,
  } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import BottomNav from "./BottomNav";
import MonthPicker from "./MonthPicker";

export default function Footer() {
  const [selected2, setCount] = useState(undefined);
  const tabState = useSelector((state) => state.tabs);
  const dispatch = useDispatch();
  return (
    <View>
        {
            tabState.tab == 1 && <MonthPicker />
        }
        {
            tabState.tab == 1 && <TouchableOpacity>
                <View style={{height: 60, backgroundColor: "#95d3f8", justifyContent: "center", alignItems: "center"}}>
                    <Text>Add a New Expense</Text>
                    </View>
                    </TouchableOpacity>
        }
        {
            tabState.tab == 2 && <TouchableOpacity>
                <View style={{height: 60, backgroundColor: "#95d3f8", justifyContent: "center", alignItems: "center"}}>
                    <Text>Add a New Recurring Expense</Text>
                    </View>
                    </TouchableOpacity>
        }
      <BottomNav />
    </View>
  );
}
