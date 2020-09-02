import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image source={require("./assets/icon.png")} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B8E9FF",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 20,
  },
});
