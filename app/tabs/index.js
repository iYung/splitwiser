import React, { useState } from "react";
import { Text } from "native-base";
import {
    StyleSheet,
    TouchableOpacity,
    RefreshControl,
    View,
  } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Summary from "./Summary";
import Expenses from "./Expenses";

export default function Footer() {
  const [selected2, setCount] = useState(undefined);
  const tabState = useSelector((state) => state.tabs);
  const dispatch = useDispatch();
  return (
    <View>
        {
            tabState.tab == 0 && <Summary />
        }
        {
            tabState.tab == 1 && <Expenses />
        }
        {
            tabState.tab == 2 && <Summary />
        }
    </View>
  );
}
