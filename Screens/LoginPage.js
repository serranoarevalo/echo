import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class LoginPage extends Component {
  render() {
    return (
      <View style={styles.loginContainer}>
        <Text>LoginPage</Text>
      </View>
    );
  }
}

styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default LoginPage;
