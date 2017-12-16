import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { DrawerNavigator } from "react-navigation";
import Home from "../Screens/Home";
import FriendManager from "../Screens/FriendManager";

const DrawerNav = DrawerNavigator(
  {
    homeScreen: { screen: Home },
    friendManagerScreen: { screen: FriendManager }
  },
  {
    headerMode: "None",
    initialRouteName: "homeScreen"
  }
);

export default DrawerNav;
