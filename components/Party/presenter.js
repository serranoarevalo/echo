import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";

class Party extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    maxNumb: PropTypes.number.isRequired,
    curNumb: PropTypes.number.isRequired,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired
  };
  render() {
    return (
      <View style={styles.container}>
        <Ionicons name={this.props.icon} style={styles.icon} />
        <View style={styles.box1}>
          <Text style={styles.category}>{this.props.category}</Text>
          <Text style={styles.numb}>
            {this.props.curNumb} / {this.props.maxNumb}
          </Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.time}>
            {this.props.startTime} ~ {this.props.endTime}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    flexDirection: "row"
  },
  icon: {
    fontSize: 70,
    flex: 1
  },
  box1: {
    flex: 2.4,
    paddingHorizontal: 15,
    alignItems: "stretch"
  },
  box2: {
    flex: 0.9
  },
  time: {
    marginVertical: 8
  },
  category: {
    fontSize: 24,
    marginBottom: 7
  },
  numb: {
    marginTop: 7
  }
});

export default Party;
