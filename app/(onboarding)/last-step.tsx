// app/confirm-email.jsx
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function ConfirmEmail() {
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const router = useRouter();

    const handleChange = (text: string, index: number) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
    };

    return (
        <View style={styles.container}>
            {/* Back arrow and progress bar */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.backArrow}>←</Text>
                </TouchableOpacity>
            </View>

            {/* Step indicator */}
            <View style={styles.stepIndicator}>
                <View style={[styles.step, styles.activeStep]} />
                <View style={[styles.step, styles.activeStep]} />
                <View style={[styles.step, styles.inactiveStep]} />
            </View>

            {/* Title & Description */}
            <Text style={styles.title}>
                Confirm your email
            </Text>
            <Text style={styles.description}>
                Enter the code we sent to{" "}
                <Text style={styles.email}>youremail@domain.com</Text>{" "}
                to confirm it&apos;s really you.
            </Text>

            {/* Code inputs */}
            <View style={styles.codeContainer}>
                {code.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.codeInput}
                        maxLength={1}
                        keyboardType="number-pad"
                        value={digit}
                        onChangeText={(text) => handleChange(text, index)}
                    />
                ))}
            </View>

            {/* Resend */}
            <Text style={styles.resendContainer}>
                Didn&apos;t receive code?{" "}
                <Text style={styles.resendText}>Resend</Text>
            </Text>

            {/* Continue button */}
            <TouchableOpacity
                disabled={code.join("").length < 6}
                style={[
                    styles.continueButton,
                    code.join("").length < 6 ? styles.disabledButton : styles.enabledButton
                ]}
            >
                <Text
                    style={[
                        styles.continueButtonText,
                        code.join("").length < 6 ? styles.disabledButtonText : styles.enabledButtonText
                    ]}
                >
                    Continue
                </Text>
            </TouchableOpacity>

            {/* Floating profile */}
            <View style={styles.profileContainer}>
                <Image
                    source={{ uri: "https://i.pravatar.cc/100?img=8" }}
                    style={styles.profileImage}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 56,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32,
    },
    backArrow: {
        fontSize: 24,
    },
    stepIndicator: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 32,
    },
    step: {
        height: 6,
        width: 64,
        borderRadius: 999,
        marginRight: 8,
    },
    activeStep: {
        backgroundColor: '#EF4444', // red-500
    },
    inactiveStep: {
        backgroundColor: '#E5E7EB', // gray-200
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#111827', // gray-900
        marginBottom: 8,
    },
    description: {
        color: '#6B7280', // gray-500
        marginBottom: 24,
    },
    email: {
        fontWeight: '600',
        color: '#1F2937', // gray-800
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    codeInput: {
        width: 48,
        height: 48,
        borderWidth: 1,
        borderColor: '#D1D5DB', // gray-300
        borderRadius: 12,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: '#111827', // gray-900
    },
    resendContainer: {
        color: '#6B7280', // gray-500
        textAlign: 'center',
        marginBottom: 32,
    },
    resendText: {
        color: 'black',
        fontWeight: '600',
    },
    continueButton: {
        paddingVertical: 16,
        borderRadius: 999,
    },
    enabledButton: {
        backgroundColor: 'black',
    },
    disabledButton: {
        backgroundColor: '#E5E7EB', // gray-200
    },
    continueButtonText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
    enabledButtonText: {
        color: 'white',
    },
    disabledButtonText: {
        color: '#6B7280', // gray-500
    },
    profileContainer: {
        position: 'absolute',
        bottom: 40,
        left: 20,
    },
    profileImage: {
        width: 48,
        height: 48,
        borderRadius: 24,
        borderWidth: 2,
        borderColor: 'white',
    },
});
