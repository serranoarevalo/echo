import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AppLoading, Asset, Font } from "expo";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import DrawerNav from "./Navs/DrawerNav";
import LoginPage from "./Screens/LoginPage";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    isLoggedIn: true
  };
  render() {
    const { isLoadingComplete, isLoggedIn } = this.state;
    // 이미지, 폰트 등등을 미리 가져오기
    if (!isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    return (
      <View style={styles.container}>
        {isLoggedIn ? <DrawerNav /> : <LoginPage />}
      </View>
    );
  }
  _loadAssetsAsync = async () => {
    return Promise.all([
      // Asset.loadAsync([
      //   require("./assets/images/logo.png"),
      //   require("./assets/images/logo-white.png"),
      //   require("./assets/images/noPhoto.jpg"),
      //   require("./assets/images/photoPlaceholder.png")
      // ]),
      Font.loadAsync({
        ...Ionicons.font,
        ...MaterialIcons.font
      })
    ]);
  };

  _handleFinishLoading = async () => {
    this.setState({
      isLoadingComplete: true
    });
  };
  _handleLoadingError = error => {
    console.error(error);
  };
}

styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
