import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { DrawerNavigator, NavigationActions } from "react-navigation";
import { Constants } from "expo";

class Echo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RootDrawer />
      </View>
    );
  }
}

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("DrawerOpen")}
        title="Open drawer"
      />
    </View>
  );
};

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};

const FriendManagerScreen = ({ navigation }) => {
  return (
    <View>
      <Text>FriendManagerScreen</Text>
    </View>
  );
};

const RootDrawer = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        drawerLabel: "Home"
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        drawerLabel: "Profile"
      }
    },
    FriendManager: {
      screen: FriendManagerScreen,
      navigationOptions: {
        drawerLabel: "Friends"
      }
    }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  }
});

export default Echo;
