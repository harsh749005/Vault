import React, { useRef } from "react";
import { Pressable, Animated, Text } from "react-native";
import { Href, router } from "expo-router";

type BtnProps = {
  buttonName: string;
  routerHandle: Href;
};

export default function AnimatedButton({ buttonName, routerHandle }: BtnProps) {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      
        router.push(routerHandle);
      
    });
  };

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable onPress={handlePress}>
        <Text
          style={{
            color: "rgba(138, 138, 138, 1)",
            fontWeight: "600",
            textAlign: "center",
            marginBottom: 30,
            marginTop:12
          }}
        >
          {buttonName}
        </Text>
      </Pressable>
    </Animated.View>
  );
}
