import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "하늘이 노랗게 됐어요!",
    subtitle: "나가기 전에 마스크 꼭 챙겨요!",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#4b6cb7", "#182848"],
    title: "천둥번개 조심해요!",
    subtitle: "오늘은 집에 있는게 안전할 것 같아..",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#0082c8", "#667db6"],
    title: "비가 조금씩 내리고 있습니다.",
    subtitle: "가방에 작은우산 하나 챙기세요.",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#00d2ff", "#3a7bd5"],
    title: "오늘 외출하실 건가요?",
    subtitle: "밖에 비가 오는데도 외출 할 거예요?",
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "눈이 내린다! 흰눈!",
    subtitle: "하지만 조심하세요! 바닥이 미끄러워요.",
  },
  Atmosphere: {
    iconName: "weather-tornado",
    gradient: ["#cac531", "#f3f9a7"],
    title: "아마 공기가 안좋을지도...",
    subtitle: "...어쨌든, 조심하세요.",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#ff5f6d", "#ffc371"],
    title: "오늘은 집에 있기 아쉬운데요?",
    subtitle: "기분까지 맑아지는 맑은 날이 예상됩니다!",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#757f9a", "#d7dde8"],
    title: "구름이 구름구름 너무 많아요~",
    subtitle: "비가 오려나요...?",
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#8e9eab", "#eef2f3"],
    title: "오늘 운전을 한다면 어제보다 더 안전운전!",
    subtitle: "안개 때문에 앞이 잘 안보일 수 도 있어요.",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#6d6027", "#d3cbb8"],
    title: "나가기 전에 마스크 챙겨요.",
    subtitle: "오늘 바깥 공기는 '나쁨' 입니다.",
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
          💬 {weatherOptions[condition].subtitle}
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
    marginBottom: 15,
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 20,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
