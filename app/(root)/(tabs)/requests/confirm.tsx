import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ConfirmPublishScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="chevron-back" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Step */}
                <Text style={styles.stepText}>Step 4 of 4</Text>

                {/* Title */}
                <Text style={styles.title}>Confirm and publish</Text>

                {/* Request summary */}
                <Text style={styles.sectionTitle}>Request summary</Text>
                <View style={styles.summaryContainer}>
                    <Text style={styles.summaryLabel}>Location</Text>
                    <Text style={styles.summaryValue}>
                        Plot 235, Adewale Adetokunbo St, Central District, Abuja, FCT.
                    </Text>

                    <Text style={styles.summaryLabel}>Description</Text>
                    <Text style={styles.summaryValue}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </Text>

                    <Text style={styles.summaryLabel}>Duration</Text>
                    <Text style={styles.summaryValue}>2 hours</Text>

                    <Text style={styles.summaryLabel}>Comments</Text>
                    <Text style={styles.summaryValue}>Allowed</Text>

                    <Text style={styles.summaryLabel}>Reward</Text>
                    <Text style={styles.summaryValue}>₦2,500</Text>
                </View>

                {/* Payment details */}
                <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Payment details</Text>
                <TouchableOpacity onPress={() => router.push('/(root)/(tabs)/requests/request')} style={styles.paymentBox} activeOpacity={0.8}>
                    <View style={styles.paymentLeft}>
                        <Ionicons name="wallet-outline" size={20} color="#000" />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.paymentTitle}>Wallet (₦1,550)</Text>
                            <Text style={styles.paymentSubtitle}>
                                This will be used as your default payment method.
                            </Text>
                        </View>
                    </View>
                    <Ionicons name="radio-button-on" size={20} color="#ff3b30" />
                </TouchableOpacity>

                {/* Deposit policy */}
                <Text style={[styles.sectionTitle, { marginTop: 24 }]}>
                    Deposit & refund policy
                </Text>
                <Text style={styles.policyText}>
                    Deposited funds will be secured with your chosen transaction gateway and will
                    only be refunded upon cancellation of this request. Reach out to us through our{" "}
                    <Text style={styles.link}>contact handles</Text> in regards to any financial
                    issues.
                </Text>
            </ScrollView>

            {/* Bottom Bar */}
            <View style={styles.bottomBar}>
                <View style={styles.priceBox}>
                    <Text style={styles.priceText}>₦0.00</Text>
                    <Text style={styles.priceSub}>1x request</Text>
                </View>

                <TouchableOpacity style={styles.postButton} onPress={() => router.push('/(root)/(tabs)/requests/request')}>
                    <Text style={styles.postButtonText}>Post request</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 8,
    },
    backButton: {
        padding: 6,
        borderRadius: 10,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 100,
    },
    stepText: {
        fontSize: 14,
        color: "#777",
        marginTop: 10,
        marginBottom: 6,
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#000",
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 15,
        fontWeight: "600",
        color: "#000",
        marginBottom: 8,
    },
    summaryContainer: {
        backgroundColor: "#fafafa",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#eee",
        padding: 14,
    },
    summaryLabel: {
        color: "#666",
        fontSize: 14,
        marginTop: 10,
    },
    summaryValue: {
        color: "#111",
        fontSize: 15,
        fontWeight: "500",
        marginTop: 2,
    },
    paymentBox: {
        borderWidth: 1,
        borderColor: "#ff3b30",
        borderRadius: 10,
        padding: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    paymentLeft: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    paymentTitle: {
        fontSize: 15,
        fontWeight: "600",
        color: "#000",
    },
    paymentSubtitle: {
        fontSize: 13,
        color: "#777",
        marginTop: 2,
    },
    policyText: {
        color: "#444",
        fontSize: 14,
        lineHeight: 20,
    },
    link: {
        color: "#007aff",
        textDecorationLine: "underline",
    },
    bottomBar: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderTopWidth: 1,
        borderColor: "#eee",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 14,
    },
    priceBox: {
        flexDirection: "column",
    },
    priceText: {
        fontSize: 16,
        fontWeight: "700",
        color: "#000",
    },
    priceSub: {
        fontSize: 13,
        color: "#888",
    },
    postButton: {
        backgroundColor: "#000",
        paddingVertical: 12,
        paddingHorizontal: 22,
        borderRadius: 30,
    },
    postButtonText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 15,
    },
});
