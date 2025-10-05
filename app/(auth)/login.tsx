import { router } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import Button from "../components/button";

export default function Login() {
    const [radioButtons, setRadioButtons] = useState([
        {
            id: "1",
            label: "Remember me",
            value: "remember_me",
            selected: false,
        },
    ]);

    const onPressRadioButton = (radioButtonsArray: any) => {
        setRadioButtons(radioButtonsArray);
    };

    return (
        <View style={styles.container}>
            {/* Logo Section */}
            <View style={styles.logoContainer}>
                <Image
                    source={require("@/assets/images/logo.png")}
                    style={styles.logo}
                />
            </View>

            {/* Header */}
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Log in to continue using LiveLens</Text>

            {/* Form Fields */}
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    placeholder="example@gmail.com"
                    placeholderTextColor="#999"
                    style={styles.input}
                    keyboardType="email-address"
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                    placeholder="Enter your password"
                    placeholderTextColor="#999"
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            {/* Remember me + Forgot password */}
            <View style={styles.row}>
                <RadioGroup
                    radioButtons={radioButtons}
                    onPress={onPressRadioButton}
                    layout="row"
                />
                <TouchableOpacity>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            {/* Login Button */}
            <Button title="Log In" style={styles.loginButton} textColor="#fff" />

            {/* Divider */}
            <Text style={styles.divider}>──────────  OR  ──────────</Text>

            {/* Social Login */}
            <Button
                title="Continue with Google"
                style={[styles.socialButton, { backgroundColor: "#DB4437" }]}
                textColor="#fff"
                onPress={() => { router.push('/(auth)/forgot-password') }}
            />
            <Button
                title="Continue with Facebook"
                style={[styles.socialButton, { backgroundColor: "#1877F2" }]}
                textColor="#fff"
            />

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>Don't have an account? </Text>
                <TouchableOpacity>
                    <Text style={styles.footerLink}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    logoContainer: {
        alignItems: "center",
        marginBottom: 30,
    },
    logo: {
        width: 90,
        height: 90,
        resizeMode: "contain",
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        textAlign: "center",
        color: "#111",
    },
    subtitle: {
        textAlign: "center",
        color: "#555",
        marginBottom: 40,
        fontSize: 14,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontWeight: "500",
        color: "#333",
        marginBottom: 6,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        padding: 12,
        fontSize: 16,
        backgroundColor: "#fafafa",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 25,
    },
    forgotText: {
        color: "#de1c1c",
        fontWeight: "500",
    },
    loginButton: {
        backgroundColor: "#de1c1c",
        marginBottom: 15,
    },
    divider: {
        textAlign: "center",
        color: "#999",
        marginVertical: 15,
    },
    socialButton: {
        marginBottom: 15,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 25,
    },
    footerText: {
        color: "#555",
    },
    footerLink: {
        color: "#de1c1c",
        fontWeight: "600",
    },
});
