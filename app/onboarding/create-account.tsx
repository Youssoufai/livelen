import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function CreateAccount() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);

    const passwordsMatch = password === confirmPassword || confirmPassword === "";

    const handleRegister = async () => {
        if (!fullName || !email || !password || !confirmPassword || !phone) {
            Alert.alert("Missing Fields", "Please fill in all fields.");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Password Mismatch", "Passwords do not match.");
            return;
        }
        if (password.length < 8) {
            Alert.alert("Weak Password", "Password must be at least 8 characters long.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("https://livelenns.online/public/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: fullName,
                    email,
                    password,
                    password_confirmation: confirmPassword,
                    phone,
                }),
            });

            const data = await response.json();
            setLoading(false);

            if (response.ok) {
                Alert.alert("Success", "Account created successfully!");
                console.log("✅ Registered:", data);
                // You can navigate to login screen here
            } else {
                console.log("❌ Error:", data);
                Alert.alert("Error", data.message || "Something went wrong.");
            }
        } catch (error) {
            setLoading(false);
            console.error("❌ Network Error:", error);
            Alert.alert("Network Error", "Please check your connection and try again.");
        }
    };

    return (
        <View style={styles.container}>
            {/* Progress Bar */}
            <View style={styles.progressContainer}>
                <View style={[styles.step, styles.activeStep]} />
                <View style={styles.step} />
                <View style={styles.step} />
                <View style={styles.step} />
            </View>

            <Text style={styles.title}>Create your account</Text>
            <Text style={styles.subtitle}>
                Get real-time location updates and enjoy full access to all features.
            </Text>

            <TextInput
                style={styles.input}
                placeholder="John Doe"
                value={fullName}
                onChangeText={setFullName}
            />

            <TextInput
                style={styles.input}
                placeholder="john@example.com"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            {/* Password */}
            <View style={styles.passwordContainer}>
                <TextInput
                    style={[styles.inputField, { flex: 1 }]}
                    placeholder="Create a password"
                    secureTextEntry={!passwordVisible}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity
                    onPress={() => setPasswordVisible(!passwordVisible)}
                    style={styles.eyeIcon}
                >
                    <Ionicons
                        name={passwordVisible ? "eye-off" : "eye"}
                        size={20}
                        color="gray"
                    />
                </TouchableOpacity>
            </View>

            {/* Confirm Password */}
            <View
                style={[
                    styles.passwordContainer,
                    !passwordsMatch && confirmPassword ? styles.errorBorder : null,
                ]}
            >
                <TextInput
                    style={[styles.inputField, { flex: 1 }]}
                    placeholder="Confirm password"
                    secureTextEntry={!confirmVisible}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <TouchableOpacity
                    onPress={() => setConfirmVisible(!confirmVisible)}
                    style={styles.eyeIcon}
                >
                    <Ionicons
                        name={confirmVisible ? "eye-off" : "eye"}
                        size={20}
                        color="gray"
                    />
                </TouchableOpacity>
            </View>

            {!passwordsMatch && confirmPassword ? (
                <Text style={styles.errorText}>Passwords do not match</Text>
            ) : null}

            {/* Phone Number */}
            <View style={styles.phoneContainer}>
                <View style={styles.countryCode}>
                    <Text style={styles.flag}>🇳🇬</Text>
                    <Text style={styles.code}>+234</Text>
                </View>
                <TextInput
                    style={[styles.input, { flex: 1, marginLeft: 8 }]}
                    placeholder="Phone number"
                    keyboardType="phone-pad"
                    value={phone}
                    onChangeText={setPhone}
                />
            </View>

            {/* Register Button */}
            <TouchableOpacity
                style={[
                    styles.nextButton,
                    passwordsMatch && password.length >= 8
                        ? styles.nextButtonActive
                        : null,
                ]}
                disabled={loading || !passwordsMatch || password.length < 8}
                onPress={handleRegister}
            >
                {loading ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text
                        style={[
                            styles.nextButtonText,
                            passwordsMatch && password.length >= 8
                                ? styles.nextButtonTextActive
                                : null,
                        ]}
                    >
                        Create Account
                    </Text>
                )}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    progressContainer: {
        flexDirection: "row",
        marginBottom: 30,
    },
    step: {
        flex: 1,
        height: 3,
        borderRadius: 2,
        backgroundColor: "#eee",
        marginHorizontal: 3,
    },
    activeStep: {
        backgroundColor: "red",
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 14,
        color: "#555",
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 6,
        padding: 12,
        marginBottom: 15,
    },
    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 6,
        marginBottom: 10,
    },
    inputField: {
        padding: 12,
    },
    eyeIcon: {
        paddingHorizontal: 10,
    },
    errorBorder: {
        borderColor: "red",
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginBottom: 10,
    },
    phoneContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    countryCode: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
    flag: {
        fontSize: 18,
        marginRight: 4,
    },
    code: {
        fontSize: 14,
        fontWeight: "600",
    },
    nextButton: {
        backgroundColor: "#ddd",
        paddingVertical: 14,
        borderRadius: 25,
        alignItems: "center",
        marginTop: "auto",
        marginBottom: 20,
    },
    nextButtonActive: {
        backgroundColor: "red",
    },
    nextButtonText: {
        color: "#999",
        fontSize: 16,
        fontWeight: "600",
    },
    nextButtonTextActive: {
        color: "#fff",
    },
});
