import {
  Dimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Colors } from "@/utils/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

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
            paddingTop: 20,
            paddingLeft: 20,
            alignItems: "flex-start", // 👈 centers text horizontally
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT, // 👈 force full screen height
          }}
        >
          <Pressable style={styles.itemContainer} onPress={()=>router.push('/(protected)/(sub_pages)/Password')}>
            <MaterialIcons name="lock" size={24} color={Colors.tabIconColor} />
            <Text style={styles.text}>Password</Text>
          </Pressable>
          <View style={styles.itemContainer}>
            <MaterialCommunityIcons
              name="note-text"
              size={24}
              color={Colors.tabIconColor}
            />
            <Text style={styles.text}>Secure note</Text>
          </View>
          <View style={styles.itemContainer}>
            <MaterialIcons
              name="contacts"
              size={24}
              color={Colors.tabIconColor}
            />
            <Text style={styles.text}>Contact info</Text>
          </View>
          <View
            style={{
              width: SCREEN_WIDTH * 0.9,
              height: 1,
              backgroundColor: Colors.inputBorder,
            }}
          ></View>
          <View style={styles.itemContainer}>
            <FontAwesome
              name="credit-card-alt"
              size={20}
              color={Colors.tabIconColor}
            />
            <Text style={styles.text}>Payment Card</Text>
          </View>
          <View style={styles.itemContainer}>
            <FontAwesome name="bank" size={20} color={Colors.tabIconColor} />
            <Text style={styles.text}>Bank account</Text>
          </View>
          <View
            style={{
              width: SCREEN_WIDTH * 0.9,
              height: 1,
              backgroundColor: Colors.inputBorder,
            }}
          ></View>
          <View style={styles.itemContainer}>
            <FontAwesome6 name="car" size={20} color={Colors.tabIconColor} />
            <Text style={styles.text}>{`Driver's licence`}</Text>
          </View>
          <View style={styles.itemContainer}>
            <FontAwesome6
              name="passport"
              size={20}
              color={Colors.tabIconColor}
            />
            <Text style={styles.text}>Passport</Text>
          </View>
          <View
            style={{
              width: SCREEN_WIDTH * 0.9,
              height: 1,
              backgroundColor: Colors.inputBorder,
            }}
          ></View>
          <View style={styles.itemContainer}>
            <Ionicons name="mail" size={20} color={Colors.tabIconColor} />
            <Text style={styles.text}>Email account</Text>
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
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
