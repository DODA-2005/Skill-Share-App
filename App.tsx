// 1. App.tsx

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { RootStackParamList } from "./RouteParamList";
import { Home, Matches, Messages, Profile, ChatScreen, MatchedProfile } from "./skills_expo/screens";
import { PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE } from "./skills_expo/assets/styles";
import TabBarIcon from "./skills_expo/components/TabBarIcon";
import { LoadingScreen } from "./skills_expo/screens";

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: PRIMARY_COLOR,
      inactiveTintColor: DARK_GRAY,
      showLabel: false,
      labelStyle: {
        fontSize: 14,
        textTransform: "uppercase",
        paddingTop: 10,
      },
      style: {
        backgroundColor: WHITE,
        borderTopWidth: 0,
        marginBottom: 0,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: BLACK,
        shadowOffset: { height: 0, width: 0 },
      },
    }}
  >
    <Tab.Screen
      name="Explore"
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} iconName="search" text="Explore" />
        ),
      }}
    />
    <Tab.Screen
      name="Matches"
      component={Matches}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} iconName="school" text="Matches" />
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={Messages}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} iconName="chatbubble" text="Chat" />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} iconName="person" text="Profile" />
        ),
      }}
    />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Loading">
      <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={({ route }) => ({
          title: route.params.user.name,
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="MatchedProfile"
        component={MatchedProfile}
        options={({ route }) => ({
          title: route.params.user.name,
          headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
