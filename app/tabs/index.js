import React, { useState } from "react";

import { View } from "react-native";
import { useSelector } from "react-redux";

import Expenses from "./Expenses";
import Monthly from "./Monthly";

export default function Footer() {
  const tabState = useSelector((state) => state.tabs);
  return (
    <View>
      {tabState.tab == 0 && <Expenses />}
      {tabState.tab == 1 && <Monthly />}
    </View>
  );
}
