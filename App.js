import React from "react";
import { View, Text } from "react-native";
import Echo from "./Echo";
import LoginPage from "./LoginPage";

export default class App extends React.Component {
  render() {
      return (
        <View>
          <Echo />
        </View>
      );
  }
}
