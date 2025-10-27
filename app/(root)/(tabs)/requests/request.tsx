import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

// 🟢 Screen 1: Available Requests
function AvailableRequests() {
    return (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>No available requests</Text>
            <Text style={styles.emptyText}>
                When users post a request, it will appear here.
            </Text>
        </View>
    );
}

// 🔵 Screen 2: Posted Requests
function PostedRequests() {
    return (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>No requests posted</Text>
            <Text style={styles.emptyText}>
                When you post a request, it will show up here.
            </Text>

            <TouchableOpacity style={styles.fab}>
                <Ionicons name="add" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}

// 🟣 Screen 3: Sent Offers
function SentOffers() {
    return (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>No offers sent</Text>
            <Text style={styles.emptyText}>
                When you send an offer, it will appear here.
            </Text>
        </View>
    );
}

export default function RequestsTabs() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Requests</Text>
            </View>

            <Tab.Navigator
                screenOptions={{
                    tabBarIndicatorStyle: { backgroundColor: "#000" },
                    tabBarLabelStyle: { fontWeight: "600", textTransform: "none" },
                    tabBarActiveTintColor: "#000",
                    tabBarInactiveTintColor: "#888",
                }}
            >
                <Tab.Screen name="Available requests" component={AvailableRequests} />
                <Tab.Screen name="Posted requests" component={PostedRequests} />
                <Tab.Screen name="Sent offers" component={SentOffers} />
            </Tab.Navigator>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        paddingBottom: 6,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: "700",
        color: "#000",
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    emptyTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#000",
    },
    emptyText: {
        color: "#666",
        marginTop: 4,
        fontSize: 14,
    },
    fab: {
        position: "absolute",
        bottom: 30,
        right: 25,
        backgroundColor: "#ff3b30",
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: "center",
        alignItems: "center",
        elevation: 3,
    },
});
