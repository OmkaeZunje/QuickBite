import React from "react";
import { View, Text, Button } from "react-native";

const ChatScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Chat Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default ChatScreen;
