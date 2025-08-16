import React from "react";
import { Redirect, Tabs } from "expo-router";
import { useAuth } from "@/lib/ContextAppWrite";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "@/utils/Colors";
const Protected = () => {
  const { session } = useAuth();
  return !session ? (
    <Redirect href="/(auth)/Login" />
  ) : (
    <Tabs
      screenOptions={{
        headerShown: false, // already hiding header
        tabBarStyle: {
          backgroundColor: Colors.tabBgColor, // 👈 Black tab bar
          borderTopWidth: 1, // remove line above tab bar
          borderColor: Colors.tabBorderColor,
        },
        tabBarActiveTintColor: "#fff", // active icon/text white
        tabBarInactiveTintColor: Colors.tabIconColor, // inactive grey
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarLabel: "Vault",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="vault" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="NewList"
        options={{
          tabBarLabel: "New",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-box" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Setting"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Protected;
