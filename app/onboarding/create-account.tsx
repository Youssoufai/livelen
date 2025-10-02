import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function CreateAccount() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <View style={styles.container}>
            {/* Progress Bar */}
            <View style={styles.progressContainer}>
                <View style={[styles.step, styles.activeStep]} />
                <View style={styles.step} />
                <View style={styles.step} />
                <View style={styles.step} />
            </View>

            {/* Title */}
            <Text style={styles.title}>Create your account</Text>
            <Text style={styles.subtitle}>
                Get real-time location updates and enjoy full access to all features.
            </Text>

            {/* Full Name */}
            <TextInput style={styles.input} placeholder="John Doe" />

            {/* Email */}
            <TextInput
                style={styles.input}
                placeholder="john@example.com"
                keyboardType="email-address"
            />

            {/* Password */}
            <View style={styles.passwordContainer}>
                <TextInput
                    style={[styles.input, { flex: 1 }]}
                    placeholder="Create a password"
                    secureTextEntry={!passwordVisible}
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
            <Text style={styles.passwordHint}>
                Passwords must be a minimum of 8 characters, include one letter, and one
                number or symbol.
            </Text>

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
                />
            </View>

            {/* Next Button */}
            <TouchableOpacity style={styles.nextButton} disabled>
                <Text style={styles.nextButtonText}>Next</Text>
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
        marginBottom: 6,
    },
    eyeIcon: {
        paddingHorizontal: 10,
    },
    passwordHint: {
        fontSize: 12,
        color: "#888",
        marginBottom: 15,
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
        backgroundColor: "#ddd", // disabled look
        paddingVertical: 14,
        borderRadius: 25,
        alignItems: "center",
        marginTop: "auto",
        marginBottom: 20,
    },
    nextButtonText: {
        color: "#999",
        fontSize: 16,
        fontWeight: "600",
    },
});
