import React from "react";
import { Tabs, useRouter } from "expo-router";
import { useAuth } from "@/lib/ContextAppWrite";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "@/utils/Colors";
import OnBoadringScreen from "@/components/OnBoadringScreen";
import { Pressable } from "react-native";

const Protected = () => {
  const { session } = useAuth();
  const router = useRouter();
  return !session ? (
    <OnBoadringScreen />
  ) : (
    <Tabs
      screenOptions={{
        // already hiding header
        
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
          headerShown: false,
          tabBarLabel: "Vault",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="vault" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="NewList"
        options={{
          headerTitle: "Add Item",

          headerStyle: {
            backgroundColor: Colors.mainBg,
          },
          headerLeft: () => {
            return (
              <Pressable
                onPress={() => router.back()}
                style={{ paddingHorizontal: 10 }}
              >
                <MaterialIcons
                  name="arrow-back"
                  size={24}
                  color={Colors.textPrimary}
                />
              </Pressable>
            );
          },
          tabBarLabel: "New",
          headerTintColor: Colors.textPrimary,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-box" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Setting"
        options={{
          headerShown: false,
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
      name="(sub_pages)"
      options={{
        headerShown:false
    
      }}
      />
    </Tabs>
  );
};

export default Protected;
