import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class FriendManager extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>FriendManager</Text>
        <Text onPress={() => this.props.navigation.navigate("DrawerOpen")}>
          DrawerButton
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default FriendManager;
