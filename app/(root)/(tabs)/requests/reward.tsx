import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RewardScreen() {
    const [selectedReward, setSelectedReward] = useState("1000");

    const rewards = [
        { id: "1000", amount: "₦1,000", label: "Popular for simple tasks, gets casual responses fast.", tag: "Most popular" },
        { id: "2500", amount: "₦2,500", label: "Attracts faster and more reliable responses." },
        { id: "custom", amount: "Custom", label: "Set your own price based on urgency or task complexity." },
    ];

    return (
        <SafeAreaView style={styles.container}>
            {/* Header with Back Arrow */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="chevron-back" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.stepText}>Step 3 of 4</Text>
                <Text style={styles.title}>Add reward</Text>
                <Text style={styles.subtitle}>Higher rewards can attract faster responses.</Text>

                {rewards.map((reward) => (
                    <TouchableOpacity
                        key={reward.id}
                        style={[
                            styles.rewardBox,
                            selectedReward === reward.id && styles.rewardBoxSelected,
                        ]}
                        onPress={() => setSelectedReward(reward.id)}
                        activeOpacity={0.8}
                    >
                        <View style={styles.rewardHeader}>
                            <Text
                                style={[
                                    styles.rewardAmount,
                                    selectedReward === reward.id && styles.rewardAmountSelected,
                                ]}
                            >
                                {reward.amount}
                            </Text>
                            {reward.tag && (
                                <View style={styles.tag}>
                                    <Text style={styles.tagText}>{reward.tag}</Text>
                                </View>
                            )}
                        </View>
                        <Text style={styles.rewardLabel}>{reward.label}</Text>
                    </TouchableOpacity>
                ))}

                <TouchableOpacity style={styles.checkboxContainer}>
                    <View style={styles.checkbox} />
                    <Text style={styles.checkboxLabel}>Post this request without a reward</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.nextButton} onPress={() => router.push('/(root)/(tabs)/requests/confirm')}>
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    backButton: {
        padding: 6,
        borderRadius: 10,
    },
    stepText: {
        fontSize: 14,
        color: "#777",
        marginBottom: 6,
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 4,
        color: "#000",
    },
    subtitle: {
        fontSize: 15,
        color: "#666",
        marginBottom: 20,
    },
    rewardBox: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        padding: 16,
        marginBottom: 15,
    },
    rewardBoxSelected: {
        borderColor: "#ff3b30",
        backgroundColor: "#fff5f5",
    },
    rewardHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    rewardAmount: {
        fontSize: 18,
        fontWeight: "600",
        color: "#222",
    },
    rewardAmountSelected: {
        color: "#ff3b30",
    },
    tag: {
        backgroundColor: "#ff3b30",
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    tagText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "600",
    },
    rewardLabel: {
        color: "#555",
        fontSize: 14,
        marginTop: 6,
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 25,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: "#999",
        marginRight: 10,
    },
    checkboxLabel: {
        color: "#444",
        fontSize: 15,
    },
    nextButton: {
        backgroundColor: "#000",
        paddingVertical: 14,
        borderRadius: 30,
        alignItems: "center",
    },
    nextButtonText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
    },
});
