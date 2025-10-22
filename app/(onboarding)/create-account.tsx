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
import ProgressBar from "../components/progressBar";

// ✅ Define prop types for this component
type CreateAccountProps = {
    activeIndex: number;
    totalSteps: number;
    onNextStep?: () => void;
};

// ✅ Define the allowed focused input names
type FocusedField = "name" | "email" | "password" | "confirm" | "phone" | "referral" | null;

export default function CreateAccount({
    activeIndex,
    totalSteps,
    onNextStep,
}: CreateAccountProps) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);
    const [focusedInput, setFocusedInput] = useState<FocusedField>(null);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [referralCode, setReferralCode] = useState("");
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
                    referral_code: referralCode,
                }),
            });

            const data = await response.json();
            setLoading(false);

            if (response.ok) {
                Alert.alert("Success", "Account created successfully!");
                console.log("✅ Registered:", data);
                onNextStep && onNextStep();
            } else {
                console.log("❌ Error:", data);
                if (data.errors) {
                    const errorMessages = Object.values(data.errors).flat().join("\n");
                    Alert.alert("Validation Error", errorMessages);
                } else {
                    Alert.alert("Error", data.message || "Something went wrong.");
                }
            }
        } catch (error) {
            setLoading(false);
            console.error("❌ Network Error:", error);
            Alert.alert("Network Error", "Please check your connection and try again.");
        }
    };

    return (
        <View style={styles.container}>
            <ProgressBar activeIndex={activeIndex} totalSteps={totalSteps} />

            <Text style={styles.title}>Create your account</Text>
            <Text style={styles.subtitle}>
                Get real-time location updates and enjoy full access to all features.
            </Text>

            <TextInput
                style={[styles.input, focusedInput === "name" && styles.focusedInput]}
                placeholder="John Doe"
                value={fullName}
                onFocus={() => setFocusedInput("name")}
                onBlur={() => setFocusedInput(null)}
                onChangeText={setFullName}
            />

            <TextInput
                style={[styles.input, focusedInput === "email" && styles.focusedInput]}
                placeholder="john@example.com"
                keyboardType="email-address"
                value={email}
                onFocus={() => setFocusedInput("email")}
                onBlur={() => setFocusedInput(null)}
                onChangeText={setEmail}
            />

            {/* Password */}
            <View
                style={[
                    styles.passwordContainer,
                    focusedInput === "password" && styles.focusedInput,
                ]}
            >
                <TextInput
                    style={[styles.inputField, { flex: 1 }]}
                    placeholder="Create a password"
                    secureTextEntry={!passwordVisible}
                    value={password}
                    onFocus={() => setFocusedInput("password")}
                    onBlur={() => setFocusedInput(null)}
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
                    focusedInput === "confirm" && styles.focusedInput,
                ]}
            >
                <TextInput
                    style={[styles.inputField, { flex: 1 }]}
                    placeholder="Confirm password"
                    secureTextEntry={!confirmVisible}
                    value={confirmPassword}
                    onFocus={() => setFocusedInput("confirm")}
                    onBlur={() => setFocusedInput(null)}
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
                    style={[
                        styles.input,
                        { flex: 1, marginLeft: 8 },
                        focusedInput === "phone" && styles.focusedInput,
                    ]}
                    placeholder="Phone number"
                    keyboardType="phone-pad"
                    value={phone}
                    onFocus={() => setFocusedInput("phone")}
                    onBlur={() => setFocusedInput(null)}
                    onChangeText={setPhone}
                />
            </View>

            {/* Referral Code */}
            <TextInput
                style={[styles.input, focusedInput === "referral" && styles.focusedInput]}
                placeholder="Referral code (optional)"
                value={referralCode}
                onFocus={() => setFocusedInput("referral")}
                onBlur={() => setFocusedInput(null)}
                onChangeText={setReferralCode}
                autoCapitalize="characters"
            />

            {/* Register Button */}
            <TouchableOpacity
                style={[
                    styles.nextButton,
                    passwordsMatch && password.length >= 8 ? styles.nextButtonActive : null,
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
    focusedInput: {
        borderColor: "#EF4444",
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
