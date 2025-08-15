import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { OnboardingData } from "@/data/Data";
import LottieView from "lottie-react-native";
import { Redirect, router } from "expo-router";

type Props = {
  item: OnboardingData;
  index: number;
  total: number; // total slides count
};

const RenderItem = ({ item, index, total }: Props) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const SvgImage = item.SvgImage;

  return (
    <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
      {/* Image / Animation */}
      <View style={styles.imageContainer}>
        {SvgImage ? (
          <SvgImage width={SCREEN_WIDTH * 0.8} height={SCREEN_WIDTH * 1.4} />
        ) : item.animation ? (
          <LottieView
            source={item.animation}
            style={{ width: SCREEN_WIDTH * 0.8, height: SCREEN_WIDTH * 0.8 }}
            autoPlay
            loop
          />
        ) : null}
      </View>

      {/* Text */}
      <View style={styles.textWrapper}>
        <Text style={styles.itemText}>{item.text}</Text>
        {item.description && (
          <Text style={styles.description}>{item.description}</Text>
        )}
      </View>

      {/* Show buttons only on last slide */}
      {index === total - 1 && (
        <View style={{ gap: 10, marginTop: 50 }}>
          <Pressable
            style={styles.loginButton}
            onPress={() => router.push("/(auth)/Login")}
          >
            <Text style={styles.loginText}>Login</Text>
          </Pressable>
          <Pressable
            style={styles.signupButton}
            onPress={() => router.push("/(auth)/SignUp")}
          >
            <Text style={styles.signupText}>Sign Up</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 120,
  },
  textWrapper: {
    marginTop: 60,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  itemText: {
    textAlign: "center",
    fontSize: 44,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fefefe",
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
  },
  imageContainer: {
    backgroundColor: "#0b0a08",
    alignItems: "center",
    height: 250,
    width: 250,
    justifyContent: "center",
    marginTop: 80,
    borderRadius: 125,
  },
  loginButton: {
    backgroundColor: "#E6E6E6", // soft light
    borderColor: "#8a8a8aff",
    borderWidth: 2,
    paddingHorizontal: 120,
    borderRadius: 10,
    paddingVertical: 12,
  },
  loginText: {
    color: "#1d1916", // dark text for contrast
    fontWeight: "700",
    fontSize: 18,
  },
  signupButton: {
    backgroundColor: "#444", // keeps background same as page
    borderColor: "#717171ff", // outline style
    borderWidth: 2,
    paddingHorizontal: 110,
    borderRadius: 10,
    paddingVertical: 12,
  },
  signupText: {
    fontWeight: "700",
    fontSize: 18,
    color: "#E6E6E6", // matches outline
  },
});
