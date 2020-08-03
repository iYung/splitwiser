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

export default function AppBar() {
  return (
    <Header>
      <Body>
        <Title>Splitwiser</Title>
      </Body>
      <Right />
    </Header>
  );
}
