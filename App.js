import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Loading from "components/Loading";
import { getNews } from "lib/news";

export default class App extends React.Component {
  state = {
    loading: true,
    data: null
  };
  async componentDidMount() {
    await getNews()
      .then(response => {
        // this.setState({ data: response });
        this.setState({ data: response, loading: false });
      })
      .catch(error => {
        console.error(error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { data, loading } = this.state;

    return (
      <View style={styles.container}>
        {loading ? <Loading /> : <Text>{data && JSON.stringify(data)}</Text>}
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
