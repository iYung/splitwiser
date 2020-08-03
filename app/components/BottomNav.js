import React, { useState } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Right,
  Body,
  Icon,
  Text,
  ListItem,
  Picker,
  Item,
  List,
  Fab,
} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { changeTab } from "../redux/actions";
import { View } from "react-native";

export default function BottomNav() {
  const [selected2, setCount] = useState(undefined);
  const tabState = useSelector((state) => state.tabs);
  const dispatch = useDispatch();
  return (
      <Footer>
        <FooterTab>
          <Button
            active={tabState.tab == 0}
            vertical
            onPress={() => dispatch(changeTab(0))}
          >
            <Icon name="md-document" />
            <Text>Summary</Text>
          </Button>
          <Button
            active={tabState.tab == 1}
            vertical
            onPress={() => dispatch(changeTab(1))}
          >
            <Icon name="md-cash" />
            <Text>Expenses</Text>
          </Button>
          <Button
            active={tabState.tab == 2}
            vertical
            onPress={() => dispatch(changeTab(2))}
          >
            <Icon name="md-calendar" />
            <Text>Monthly</Text>
          </Button>
        </FooterTab>
      </Footer>
  );
}
