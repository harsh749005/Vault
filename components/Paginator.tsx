import React from "react";
import { StyleSheet, View, Animated, useWindowDimensions } from "react-native";
import { OnboardingData } from "@/data/Data";

type Props = {
  scrollX: Animated.Value; // renamed for clarity
  data: OnboardingData[];
};

export default function Paginator({ scrollX, data }: Props) {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 16, 8],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={i.toString()}
            style={[styles.dot, { width: dotWidth, opacity }]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 64,
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#333",
    marginHorizontal: 4,
  },
});
