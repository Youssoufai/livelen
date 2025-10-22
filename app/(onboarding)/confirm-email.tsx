import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import ProgressBar from "../components/progressBar";

type ConfirmEmailProps = {
    activeIndex: number;
    totalSteps: number;
    onNextStep?: () => void;
};

export default function ConfirmEmail({ activeIndex, totalSteps, onNextStep }: ConfirmEmailProps) {
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const router = useRouter();

    const handleChange = (text: string, index: number) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
    };

    return (
        <View style={styles.container}>
            <ProgressBar activeIndex={activeIndex} totalSteps={totalSteps} />

            <View style={styles.content}>
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
            </View>

            {/* Continue button */}
            <TouchableOpacity
                style={[
                    styles.continueButton,
                    code.join("").length === 6 && styles.continueButtonActive
                ]}
                disabled={code.join("").length < 6}
                onPress={onNextStep}
            >
                <Text
                    style={[
                        styles.continueButtonText,
                        code.join("").length === 6 && styles.continueButtonTextActive
                    ]}
                >
                    Continue
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    content: {
        flex: 1,
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 12,
        color: '#111827',
    },
    description: {
        fontSize: 16,
        color: '#6B7280',
        marginBottom: 32,
    },
    email: {
        fontWeight: '600',
        color: '#1F2937',
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
        borderColor: '#D1D5DB',
        borderRadius: 12,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: '#111827',
    },
    resendContainer: {
        color: '#6B7280',
        textAlign: 'center',
    },
    resendText: {
        color: '#000',
        fontWeight: '600',
    },
    continueButton: {
        backgroundColor: '#E5E7EB',
        paddingVertical: 16,
        borderRadius: 25,
        marginBottom: 20,
    },
    continueButtonActive: {
        backgroundColor: '#EF4444',
    },
    continueButtonText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: '#6B7280',
    },
    continueButtonTextActive: {
        color: '#fff',
    },
});