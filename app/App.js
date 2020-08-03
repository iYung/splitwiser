import React from "react";
import { AppLoading } from "expo";
import {
  Container,
  Header,
  Title,
  Content,
  FooterTab,
  Button,
  Right,
  Body,
  Icon,
  Text,
  Tab,
  Tabs,
  ScrollableTab,
} from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import store from "./redux/store";
import Summary from "./tabs/Summary";
import Expenses from "./tabs/Expenses";
import Footer from "./components/Footer";
import AppBar from "./components/AppBar";
import Router from "./tabs";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <Container>
          <AppBar />
          <Content>
            <Router />
          </Content>
          <Footer />
        </Container>
      </Provider>
    );
  }
}
