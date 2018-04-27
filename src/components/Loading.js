import React from "react";
import { View, Image, Text } from "react-native";
import DogEmoticon from "img/dog_emoticon.gif";

export default (Loading = () => (
  <React.Fragment>
    <Image source={DogEmoticon} />
    <Text>Loading...</Text>
  </React.Fragment>
));
