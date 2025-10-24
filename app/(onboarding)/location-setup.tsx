import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import ProgressBar from "../components/progressBar";

type LocationSetupProps = {
    activeIndex: number;
    totalSteps: number;
    onNextStep?: () => void;
};

export default function LocationSetup({
    activeIndex,
    totalSteps,
    onNextStep,
}: LocationSetupProps) {
    const [address, setAddress] = useState("");

    return (
        <View style={styles.container}>
            {/* Progress Bar */}
            <ProgressBar activeIndex={activeIndex} totalSteps={totalSteps} />

            {/* Content */}
            <View style={styles.content}>
                <Text style={styles.title}>Last step! where do you live?</Text>
                <Text style={styles.description}>
                    We’ll recommend requests with the best offers for you.
                </Text>

                {/* Search Input */}
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={18} color="#999" style={styles.searchIcon} />
                    <TextInput
                        placeholder="Search address"
                        placeholderTextColor="#999"
                        style={styles.input}
                        value={address}
                        onChangeText={setAddress}
                    />
                </View>

                {/* Use Current Location */}
                <TouchableOpacity style={styles.locationButton}>
                    <Ionicons name="location-outline" size={18} color="#EF4444" />
                    <Text style={styles.locationText}>Use current location</Text>
                </TouchableOpacity>
            </View>

            {/* Confirm Button */}
            <TouchableOpacity
                style={[styles.button, !address && styles.disabledButton]}
                onPress={onNextStep}
                disabled={!address}
            >
                <Text style={[styles.buttonText, !address && styles.disabledButtonText]}>
                    Confirm
                </Text>
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
    content: {
        flex: 1,
        paddingTop: 40,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: "#111827",
    },
    description: {
        fontSize: 14,
        color: "#6B7280",
        marginTop: 6,
        marginBottom: 30,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 10,
        paddingHorizontal: 12,
        height: 50,
    },
    searchIcon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: "#111827",
    },
    locationButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 16,
    },
    locationText: {
        color: "#EF4444",
        fontWeight: "500",
        marginLeft: 5,
    },
    button: {
        backgroundColor: "#EF4444",
        paddingVertical: 16,
        borderRadius: 25,
        marginBottom: 20,
    },
    disabledButton: {
        backgroundColor: "#E5E7EB",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
    },
    disabledButtonText: {
        color: "#9CA3AF",
    },
});
