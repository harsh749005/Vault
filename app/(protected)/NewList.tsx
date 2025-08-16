import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Colors } from "@/utils/Colors";

const NewList = () => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
    Dimensions.get("screen");

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.mainBg,
            // justifyContent: "center",
            paddingTop: 50,
            paddingLeft: 20,
            alignItems: "flex-start", // 👈 centers text horizontally
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT, // 👈 force full screen height
          }}
        >
          <View>
            <Text style={styles.text}>Password</Text>
          </View>
          <View>
            <Text style={styles.text}>Secure note</Text>
          </View>
          <View>
            <Text style={styles.text}>Contact info</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewList;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.mainBg,
  },
  text: {
    // backgroundColor: "pink",
    color: Colors.textPrimary, // 👈 so text is visible on bg
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
});
