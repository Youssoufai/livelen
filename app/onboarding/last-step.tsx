import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function LastStep() {
    return (
        <View style={styles.container}>
            {/* Progress Bar */}
            <View style={styles.progressContainer}>
                <View style={[styles.step]} />
                <View style={[styles.step]} />
                <View style={[styles.step]} />
                <View style={[styles.step, styles.activeStep]} />
            </View>

            {/* Title & Subtitle */}
            <Text style={styles.title}>Last step! where do you live?</Text>
            <Text style={styles.subtitle}>
                We’ll recommend requests with the best offers for you.
            </Text>

            {/* Search Address */}
            <View style={styles.searchContainer}>
                <Ionicons name="search-outline" size={20} color="#999" />
                <TextInput
                    placeholder="Search address"
                    style={styles.searchInput}
                    placeholderTextColor="#aaa"
                />
            </View>

            {/* Use current location */}
            <TouchableOpacity style={styles.locationButton}>
                <Ionicons name="location-outline" size={18} color="red" />
                <Text style={styles.locationText}>Use current location</Text>
            </TouchableOpacity>

            {/* Confirm Button */}
            <TouchableOpacity style={styles.confirmButton} disabled>
                <Text style={styles.confirmText}>Confirm</Text>
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
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: "#555",
        marginBottom: 20,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 12,
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        marginLeft: 8,
    },
    locationButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30,
    },
    locationText: {
        color: "red",
        marginLeft: 6,
        fontSize: 14,
    },
    confirmButton: {
        backgroundColor: "#ddd",
        paddingVertical: 14,
        borderRadius: 25,
        alignItems: "center",
        marginTop: "auto",
        marginBottom: 20,
    },
    confirmText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#999",
    },
});
