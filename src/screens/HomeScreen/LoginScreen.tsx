import React, { useState } from "react";
import {
    Text,
    SafeAreaView,
    View,
    TextInput,
    Pressable,
    Alert,
    StyleSheet,
} from "react-native";


export const LoginScreen = ({ }) => {
    const [username, setUsername] = useState("");

    const handleSignIn = () => {
        if (username.trim()) {
            console.log({ username });
        } else {
            Alert.alert("Username is required.");
        }
    };

    return (
        <SafeAreaView style={styles.loginscreen}>
            <View style={styles.loginscreen}>
                <Text style={styles.loginheading}>Sign in</Text>
                <View style={styles.logininputContainer}>
                    <TextInput
                        autoCorrect={false}
                        placeholder='Enter your username'
                        style={styles.logininput}
                        onChangeText={(value) => setUsername(value)}
                    />
                </View>

                <Pressable onPress={handleSignIn} style={styles.loginbutton}>
                    <View>
                        <Text style={styles.loginbuttonText}>Get Started</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

const styles=StyleSheet.create({
  loginscreen: {
    flex: 1,
    backgroundColor: "#EEF1FF",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    width: "100%",
},
loginheading: {
    fontSize: 26,
    marginBottom: 10,
},
logininputContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
},
logininput: {
    borderWidth: 1,
    width: "90%",
    padding: 8,
    borderRadius: 2,
},
loginbutton: {
    backgroundColor: "green",
    padding: 12,
    marginVertical: 10,
    width: "60%",
    borderRadius: 10,
    elevation: 1,
},
loginbuttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
},
})
