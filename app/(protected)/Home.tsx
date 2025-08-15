import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Colors } from "@/utils/Colors";
import { useAuth } from "@/lib/ContextAppWrite";

const Home = () => {
  const { signOut } = useAuth();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={{ color: "white" }}>Home</Text>
        <Pressable onPress={signOut}>
          <Text style={{ color: "white" }}>SignOut</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.mainBg,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
