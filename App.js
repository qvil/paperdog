import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Module from "components/Module";
// import { Module } from "components";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Text</Text>
        <Module />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
