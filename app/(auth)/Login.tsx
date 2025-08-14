import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import {Colors} from '@/utils/Colors'
const Login = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.mainBg, // or your theme background
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color:Colors.textPrimary
  },
});

export default Login;
