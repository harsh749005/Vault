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
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

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
          <View style={styles.itemContainer}>
            <MaterialIcons name="lock" size={24} color={Colors.tabIconColor} />
            <Text style={styles.text}>Password</Text>
          </View>
          <View style={styles.itemContainer}>
            <MaterialCommunityIcons name="note-text" size={24} color={Colors.tabIconColor} />
            <Text style={styles.text}>Secure note</Text>
          </View>
          <View style={styles.itemContainer}>
            <MaterialIcons name="contacts" size={24} color={Colors.tabIconColor} />
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
    fontSize:16
  },
  itemContainer:{
    flexDirection:"row",
    alignItems:"center"
  }
});
