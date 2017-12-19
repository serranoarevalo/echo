import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import DrawerNav from "../../Navs/DrawerNav";
import LoginPage from "../../Screens/LoginPage";
class AppContainer extends Component {
  static PropTypes = {
    isLoggedin: PropTypes.bool.isRequired
  };
  render() {
    const { isLoggedin } = this.props;
    console.log(isLoggedin);
    return (
      <View style={styles.container}>
        {isLoggedin ? <Text>drawer here</Text> : <Text>login here</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center"
  }
});

export default AppContainer;
