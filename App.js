import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LoginNav from "./Navs/LoginNav";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginNav />
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
