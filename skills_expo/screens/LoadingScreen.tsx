// skills_expo/screens/LoadingScreen.tsx

import React, { useEffect, useRef } from "react";
import { View, Animated, Image, StyleSheet } from "react-native";

const LoadingScreen = ({ navigation }: any) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1000,
        delay: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      navigation.replace("Main");
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/SkillLink.png")}
        style={[styles.logo, { opacity }]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 250,
  },
});

export default LoadingScreen;
