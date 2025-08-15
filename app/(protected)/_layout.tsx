import React from "react";
import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/lib/ContextAppWrite";

const Protected = () => {
  const { session } = useAuth();
  return !session ? (
    <Redirect href="/(auth)/Login" />
  ) : (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
        animationDuration: 300,
      }}
    />
  );
};

export default Protected;
