import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { DARK_GRAY } from "../assets/styles";

// Define route prop type
interface User {
  name: string;
  age: string;
  location: string;
  image: { uri: string };
  description: string;
  matches: string;
  info1: string;
  info2: string;
  info3: string;
  info4: string;
  info5?: string;
}

type RouteParams = {
  MatchedProfile: { user: User };
};

type MatchedProfileRouteProp = RouteProp<RouteParams, "MatchedProfile">;

const MatchedProfile = () => {
  const route = useRoute<MatchedProfileRouteProp>();
  const { user } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: user.image.uri }} style={styles.image} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.subInfo}>{user.age} • {user.location}</Text>
      <Text style={styles.description}>{user.description}</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Skills:</Text>
        <Text style={styles.value}>{user.info1}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Learning:</Text>
        <Text style={styles.value}>{user.info2}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Availability:</Text>
        <Text style={styles.value}>{user.info3}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Last Seen:</Text>
        <Text style={styles.value}>{user.info4}</Text>
      </View>

      {user.info5 && (
        <View style={styles.section}>
          <Text style={styles.label}>State:</Text>
          <Text style={styles.value}>{user.info5}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subInfo: {
    fontSize: 16,
    color: DARK_GRAY,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  section: {
    width: "100%",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 2,
  },
  value: {
    fontSize: 15,
    color: DARK_GRAY,
  },
});

export default MatchedProfile;
