import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Colors } from "@/utils/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { DATABASE_ID, databases, PASSWORD_COLLECTION_ID } from "@/lib/appwrite";
import { ID, Permission, Role } from "react-native-appwrite";
import { useAuth } from "@/lib/ContextAppWrite";
import { router } from "expo-router";
import parseAppwriteError from "@/utils/ParseAppWriteError";
const Password = () => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
    Dimensions.get("screen");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [compName, setCompName] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useAuth();
  const handleSubmit = async () => {
    if (!user) {
      throw new Error("User not logged in");
    }
    const passwordLength = password.length;
    if (passwordLength < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    try {
      setLoading(true);
      await databases.createDocument(
        DATABASE_ID,
        PASSWORD_COLLECTION_ID,
        ID.unique(),
        { user_id: user?.$id, compName, url, username, password },
        [
          Permission.read(Role.user(user?.$id)),
          Permission.update(Role.user(user?.$id)),
          Permission.delete(Role.user(user?.$id)),
        ]
      );
      setTimeout(() => {
        setCompName("");
        setUrl("");
        setUsername("");
        setPassword("");
        setLoading(false);
        router.back();
      }, 3000);

      // console.log("Saved successfully:", res);
    } catch (error: any) {
      setError(parseAppwriteError(error.message));
      console.error("Appwrite error:", error);
    }
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <ScrollView style={{ height: 100 }}> */}
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.mainBg,
          paddingTop: 20,
          alignItems: "center",
          // justifyContent:"space-between", // 👈 centers text horizontally
          gap: 40,
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
        }}
      >
        <View
          style={{
            gap: 20,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              gap: 15,
              width: SCREEN_WIDTH,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                padding: 15,
              }}
            >
              <MaterialIcons
                name="lock"
                size={28}
                color={Colors.tabIconColor}
              />
            </View>
            <TextInput
              placeholder=""
              placeholderTextColor="#8a8a8aff"
              style={[styles.input, { width: SCREEN_WIDTH * 0.75 }]}
              keyboardType="email-address"
              onChangeText={setCompName}
              value={compName}
            />
          </View>
          <View
            style={{
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
              width: SCREEN_WIDTH,
            }}
          >
            <View
              style={[styles.inputContainer, { width: SCREEN_WIDTH * 0.95 }]}
            >
              <View
                style={{
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  paddingHorizontal: 16,
                  paddingVertical: 12,
                  backgroundColor:
                    focusedField === "url" ? "#3a3a3aff" : "transparent",
                }}
              >
                <Text
                  style={{
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    color:
                      focusedField === "url"
                        ? "#b0b0b0ff"
                        : Colors.tabIconColor,
                    fontWeight: "600",
                    backgroundColor:
                      focusedField === "url" ? "#3a3a3aff" : "transparent",
                  }}
                >
                  Url
                </Text>
                <TextInput
                  placeholder=""
                  placeholderTextColor="#8a8a8aff"
                  style={[
                    styles.subInput,
                    {
                      // width: SCREEN_WIDTH * 0.9,
                      backgroundColor:
                        focusedField === "url" ? "#3a3a3aff" : "transparent",
                    },
                  ]}
                  value={url}
                  onChangeText={setUrl}
                  keyboardType="url"
                  onFocus={() => setFocusedField("url")}
                  onBlur={() => setFocusedField(null)}
                />
              </View>

              <View
                style={{
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  paddingHorizontal: 16,
                  paddingVertical: 12,
                  backgroundColor:
                    focusedField === "username" ? "#3a3a3aff" : "transparent",
                }}
              >
                <Text
                  style={{
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    color:
                      focusedField === "username"
                        ? "#b0b0b0ff"
                        : Colors.tabIconColor,
                    fontWeight: "600",
                    backgroundColor:
                      focusedField === "username" ? "#3a3a3aff" : "transparent",
                  }}
                >
                  Username
                </Text>
                <TextInput
                  placeholder=""
                  placeholderTextColor="#8a8a8aff"
                  style={[
                    styles.subInput,
                    {
                      // width: SCREEN_WIDTH * 0.9,
                      backgroundColor:
                        focusedField === "username"
                          ? "#3a3a3aff"
                          : "transparent",
                    },
                  ]}
                  value={username}
                  onChangeText={setUsername}
                  keyboardType="default"
                  onFocus={() => setFocusedField("username")}
                  onBlur={() => setFocusedField(null)}
                />
              </View>

              <View
                style={{
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  paddingHorizontal: 16,
                  paddingVertical: 12,
                  backgroundColor:
                    focusedField === "password" ? "#3a3a3aff" : "transparent",
                }}
              >
                <Text
                  style={{
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    color:
                      focusedField === "password"
                        ? "#b0b0b0ff"
                        : Colors.tabIconColor,
                    fontWeight: "600",
                    backgroundColor:
                      focusedField === "password" ? "#3a3a3aff" : "transparent",
                  }}
                >
                  Password
                </Text>
                <TextInput
                  placeholder=""
                  placeholderTextColor="#8a8a8aff"
                  style={[
                    styles.subInput,
                    {
                      // width: SCREEN_WIDTH * 0.9,
                      backgroundColor:
                        focusedField === "password"
                          ? "#3a3a3aff"
                          : "transparent",
                      borderWidth: 0,
                    },
                  ]}
                  value={password}
                  onChangeText={setPassword}
                  keyboardType="default"
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                />
              </View>
              <Text style={{ margin: 8, fontWeight: "600", color: Colors.textPrimary }}>
                {error}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={[styles.bottomButtonContainer, { width: SCREEN_WIDTH * 0.95 }]}
        >
          <Pressable style={styles.loginButton} onPress={handleSubmit}>
            {loading && error.length === 0 ? (
              <ActivityIndicator size="small" color={Colors.inputBorder} />
            ) : (
              <Text style={styles.loginButtonText}>Save</Text>
            )}
          </Pressable>
        </View>
      </View>

      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Password;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.mainBg,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.mainBg,
  },
  inputContainer: {
    backgroundColor: Colors.textInputBG,
    borderRadius: 8,
    overflow: "hidden",
    // paddingVertical: 12,
    // paddingHorizontal: 16,
    width: "100%",
    color: Colors.textInputBG,
    gap: 10,
  },
  input: {
    // borderWidth: 2,
    // borderColor: Colors.inputBorder,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#fefefe",
    height: 60,
    backgroundColor: Colors.textInputBG,
  },
  subInput: {
    // borderColor: Colors.inputBorder,
    // borderRadius: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#565656ff",
    paddingVertical: 12,
    paddingRight: 16,
    fontSize: 16,
    color: "#b0b0b0ff",
    // backgroundColor: Colors.textInputBG,
    // height: 60,
  },
  bottomButtonContainer: {
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: "#E6E6E6",
    borderColor: "#8a8a8aff",
    borderWidth: 2,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#1d1916",
    fontSize: 18,
    fontWeight: "700",
  },
});
