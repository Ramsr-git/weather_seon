import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#4b6cb7", "#182848"],
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#0082c8", "#667db6"],
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#00d2ff", "#3a7bd5"],
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#83a4d4", "#b6fbff"],
  },
  Atmosphere: {
    iconName: "weather-tornado",
    gradient: ["#cac531", "#f3f9a7"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#ff5f6d", "#ffc371"],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#757f9a", "#d7dde8"],
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#8e9eab", "#eef2f3"],
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#6d6027", "#d3cbb8"],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfContainer} />
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
