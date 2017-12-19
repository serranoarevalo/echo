import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Text onPress={() => this.props.navigation.navigate("DrawerOpen")}>
          DrawerButton
        </Text>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default Home;
