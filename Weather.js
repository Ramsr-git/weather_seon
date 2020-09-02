import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Smoke is a yellow sky.",
    subtitle: "Before you go out, make sure to wear a mask! 😷",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#4b6cb7", "#182848"],
    title: "Watch out for thunderstorms!",
    subtitle: "I think I'd better stay at home today. 😂",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#0082c8", "#667db6"],
    title: "It's raining little by little. 🤔",
    subtitle: "I'd like a portable umbrella today!",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#00d2ff", "#3a7bd5"],
    title: "Are you going out now? 😂",
    subtitle: "Are you going out even if it rains?",
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "Wow! It's snowing! ❄️",
    subtitle: "But be careful. The floor will be slippery.",
  },
  Atmosphere: {
    iconName: "weather-tornado",
    gradient: ["#cac531", "#f3f9a7"],
    title: "I think the air is bad...",
    subtitle: "...Anyway, be careful.",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#ff5f6d", "#ffc371"],
    title: "Let's go outside! 😎",
    subtitle: "On a sunny day like today, I can't just let it go!",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#757f9a", "#d7dde8"],
    title: "There are too many clouds...🤔",
    subtitle: "Will it rain from the sky?",
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#8e9eab", "#eef2f3"],
    title: "If you drive, you should be more careful today.",
    subtitle: "Today is a foggy day.",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#6d6027", "#d3cbb8"],
    title: "Get your mask before you go out. 😷",
    subtitle: "There's a lot of dust outside today.",
  },
};

export default function Weather({ temp, condition, name }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <Text style={styles.name}>{name}</Text>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
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
  name: {
    fontSize: 18,
    color: "white",
    padding: 15,
    fontWeight: "bold",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 31,
    fontWeight: "300",
    marginBottom: 10,
    fontStyle: "italic",
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 22,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
