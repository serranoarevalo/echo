import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import DrawerNav from "./DrawerNav";
import LoginPage from "../Screens/LoginPage";

const LoginNav = TabNavigator(
  {
    loginScreen: { screen: LoginPage },
    mainStack: { screen: DrawerNav }
  },
  {
    initialRouteName: "loginScreen",
    animationEnabled: true,
  }
);

export default LoginNav;
