import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Constants } from "expo";
import Party from "../components/Party";

const partyList = [
  {
    num: 1,
    icon: "ios-basketball",
    category: "sports",
    maxNumb: 5,
    curNumb: 1,
    startTime: 12,
    endTime: 12
  },
  {
    num: 2,
    icon: "ios-bicycle",
    category: "sports",
    maxNumb: 5,
    curNumb: 1,
    startTime: 12,
    endTime: 12
  }
];

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons
            name="md-menu"
            style={styles.icons}
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
          />
          <Text style={styles.title}>Echo</Text>
          <View style={styles.buttons}>
            <Ionicons name="md-contacts" style={styles.icons} />
            <Ionicons name="md-notifications-outline" style={styles.icons} />
          </View>
        </View>
        <View style={styles.selector}>
          <TouchableOpacity>
            <Text>all</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>friend</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          {partyList.map(party => (
            <Party
              icon={party.icon}
              category={party.category}
              maxNumb={party.maxNumb}
              curNumb={party.curNumb}
              startTime={party.startTime}
              endTime={party.endTime}
              key={party.num}
            />
          ))}
        </View>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  header: {
    flex: 1, 
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between"
  },
  selector: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  body: {
    flex: 9
  },
  buttons: {
    flexDirection: "row",
    marginRight: -10
  },
  icons: {
    fontSize: 28,
    marginHorizontal: 10,
    marginBottom: -3
  },
  title: {
    fontSize: 20,
    marginRight: -5
  }
});

export default Home;
