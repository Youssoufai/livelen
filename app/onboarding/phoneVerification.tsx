import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function PhoneVerification() {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);

    const handleChange = (text: string, index: number) => {
        let newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);
    };

    return (
        <View style={styles.container}>
            {/* Header with Back Button */}
            <View style={styles.header}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </View>

            {/* Progress Bar */}
            <View style={styles.progressContainer}>
                <View style={[styles.step, styles.activeStep]} />
                <View style={[styles.step, styles.activeStep]} />
                <View style={[styles.step, styles.activeStep]} />
                <View style={[styles.step]} />
            </View>

            {/* Title & Subtitle */}
            <Text style={styles.title}>Confirm your phone</Text>
            <Text style={styles.subtitle}>
                Enter the code we sent to{" "}
                <Text style={styles.phone}>+2348050924972</Text> to confirm it’s really
                you.
            </Text>

            {/* OTP Input */}
            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpInput}
                        keyboardType="numeric"
                        maxLength={1}
                        value={digit}
                        onChangeText={(text) => handleChange(text, index)}
                    />
                ))}
            </View>

            {/* Resend Code */}
            <Text style={styles.resendText}>
                Didn’t receive code? <Text style={styles.resendLink}>Resend</Text>
            </Text>

            {/* Continue Button */}
            <TouchableOpacity style={styles.continueButton} disabled>
                <Text style={styles.continueText}>Continue</Text>
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
    header: {
        marginBottom: 20,
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
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: "#555",
        marginBottom: 20,
    },
    phone: {
        fontWeight: "600",
    },
    otpContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    otpInput: {
        width: 45,
        height: 55,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        textAlign: "center",
        fontSize: 18,
    },
    resendText: {
        textAlign: "center",
        color: "#555",
        marginBottom: 40,
    },
    resendLink: {
        color: "red",
        fontWeight: "600",
    },
    continueButton: {
        backgroundColor: "#ddd",
        paddingVertical: 14,
        borderRadius: 25,
        alignItems: "center",
        marginTop: "auto",
        marginBottom: 20,
    },
    continueText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#999",
    },
});
