import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Module from "components/Module";
// import { Module } from "components";
// import { getNews } from "lib";
import { getNews } from "lib/news";
// import { getNews } from "./src/lib/news";

export default class App extends React.Component {
  state = {
    data: {}
  };
  async componentDidMount() {
    await getNews()
      .then(response => {
        this.setState({ data: response });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { data } = this.state;

    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(data)}</Text>
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
