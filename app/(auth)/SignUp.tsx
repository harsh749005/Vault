import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { Colors } from "@/utils/Colors";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import AnimatedButton from "@/components/MyLink";
import { ScrollView } from "react-native";
import { useAuth } from "@/lib/ContextAppWrite";
import { ActivityIndicator } from "react-native";
const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { width } = Dimensions.get("window");
  const { signUp, error } = useAuth();
  const [loading, setLoading] = useState(false);
  const handleSignUp = () => {
    console.log("SignUp pressed", email, password);
    setLoading(true);
    const redirect = "/(protected)/Home";
    setTimeout(() => {
      signUp({ name, email, password, redirect });
    }, 3000);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: "#0b0a08",
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome5 name="user" size={44} color="#fefefe" />
            </View>
            {/* Header */}

            <View style={[styles.header, { marginBottom: 20 }]}>
              <Text style={styles.title}>SignUp to vault</Text>
              {/* <Text style={styles.subtitle}>Please log in to continue</Text> */}
            </View>

            {/* Inputs */}
            <View style={styles.form}>
              <TextInput
                placeholder="Name"
                placeholderTextColor="#8a8a8aff"
                style={[styles.input, { width: width - 48 }]}
                value={name}
                onChangeText={setName}
                keyboardType="default"
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor="#8a8a8aff"
                style={[styles.input, { width: width - 48 }]}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
              <View style={styles.passwordWrapper}>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="#8a8a8aff"
                  style={styles.passwordInput}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <Ionicons
                  name={showPassword ? "eye" : "eye-off"}
                  onPress={() => setShowPassword(!showPassword)}
                  size={24}
                  color="#fefefe"
                />
              </View>
              <Text style={{ fontWeight: "600", color: Colors.textPrimary }}>
                {error}
              </Text>
              {/* <Ionicons name="eye" size={24} color="#fefefe" /> */}

              {/*  Button */}
              <View style={[styles.bottomButtonContainer]}>
                <Pressable style={styles.loginButton} onPress={handleSignUp}>
                  {loading && error.length === 0 ? (
                    <ActivityIndicator
                      size="small"
                      color={Colors.inputBorder}
                    />
                  ) : (
                    <Text style={styles.loginButtonText}>SignUp</Text>
                  )}
                </Pressable>
              </View>
            </View>
          </View>

          <AnimatedButton
            buttonName="already have an account ?"
            routerHandle="/(auth)/Login"
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default SignUp;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.mainBg,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    marginTop: 50,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fefefe",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#8a8a8aff",
    marginTop: 8,
    textAlign: "center",
  },
  form: {
    gap: 16,
    paddingHorizontal: 24,
  },
  input: {
    borderWidth: 2,
    borderColor: Colors.inputBorder,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#fefefe",
    backgroundColor: Colors.textInputBG,
  },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.inputBorder,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: Colors.textInputBG,
  },
  passwordInput: {
    flex: 1, // take all available space
    fontSize: 16,
    color: "#fefefe",
    paddingVertical: 12,
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
