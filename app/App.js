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
  View,
} from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import store from "./redux/store";
import Footer from "./components/Footer";
import AppBar from "./components/AppBar";
import Router from "./tabs";
import NewExpenseModal from "./components/NewExpenseModal";
import NewRecurringExpenseModal from "./components/NewRecurringExpenseModal";

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

          <View style={{ flex: 1 }}>
            <Router />
          </View>

          <NewExpenseModal />
          <NewRecurringExpenseModal />

          <Footer />
        </Container>
      </Provider>
    );
  }
}
