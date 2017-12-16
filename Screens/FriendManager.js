import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class FriendManager extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>FriendManager</Text>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default FriendManager;
