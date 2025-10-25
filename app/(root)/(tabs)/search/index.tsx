import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function SearchScreen() {
    return (
        <View style={styles.container}>
            {/* Background Image */}
            <ImageBackground
                source={require("@/assets/images/search.png")}
                style={styles.background}
                resizeMode="cover"
            >
                <View style={styles.overlay}>
                    <Text style={styles.title}>
                        Search a place in <Text style={styles.highlight}>Abuja</Text>
                    </Text>
                    <Text style={styles.subtitle}>
                        Search any location to see what’s happening there.
                    </Text>
                </View>
            </ImageBackground>

            {/* White Card Section */}
            <View style={styles.card}>
                <ScrollView
                    contentContainerStyle={{ paddingBottom: 40 }}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Search Bar */}
                    <View style={styles.searchBar}>
                        <Ionicons name="search" size={18} color="#9CA3AF" />
                        <TextInput
                            placeholder="Search places, areas, events"
                            placeholderTextColor="#9CA3AF"
                            style={styles.input}
                            onFocus={() => router.push("/(root)/(tabs)/search/posts")}
                        />
                    </View>

                    {/* Title Section */}
                    <Text style={styles.cardTitle}>Get started with Livelens</Text>
                    <Text style={styles.cardDesc}>
                        You can also start on your own and choose one of these options later.
                    </Text>

                    {/* Option 1 */}
                    <TouchableOpacity
                        style={styles.option}
                        activeOpacity={0.7}
                        onPress={() => router.push("/(root)/(tabs)/search/posts")}
                    >
                        <View style={styles.optionIcon}>
                            <Ionicons name="search" size={22} color="#EF4444" />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.optionTitle}>Search a place</Text>
                            <Text style={styles.optionSubtitle}>
                                See the most recent news and updates about a place.
                            </Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
                    </TouchableOpacity>

                    {/* Option 2 */}
                    <TouchableOpacity
                        style={styles.option}
                        activeOpacity={0.7}
                        onPress={() => router.push("/(root)/(tabs)/search/posts-details")}
                    >
                        <View style={styles.optionIcon}>
                            <Ionicons name="chatbubble-ellipses" size={22} color="#EF4444" />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.optionTitle}>Ask the public</Text>
                            <Text style={styles.optionSubtitle}>
                                Get answers from locals about what’s happening in a location.
                            </Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    background: {
        height: "50%",
        justifyContent: "flex-end",
    },
    overlay: {
        backgroundColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 24,
        paddingBottom: 40,
    },
    title: {
        fontSize: 26,
        color: "#fff",
        fontWeight: "700",
        lineHeight: 32,
    },
    highlight: {
        textDecorationLine: "underline",
        color: "#fff",
    },
    subtitle: {
        color: "#E5E7EB",
        fontSize: 14,
        marginTop: 6,
        lineHeight: 20,
    },
    card: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -30,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 4,
    },
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 12,
        paddingHorizontal: 14,
        height: 48,
        backgroundColor: "#fff",
    },
    input: {
        flex: 1,
        marginLeft: 8,
        fontSize: 15,
        color: "#111827",
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#111827",
        marginTop: 28,
    },
    cardDesc: {
        color: "#6B7280",
        fontSize: 14,
        marginTop: 6,
        marginBottom: 18,
        lineHeight: 20,
    },
    option: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F9FAFB",
        borderRadius: 14,
        padding: 16,
        marginBottom: 12,
    },
    optionIcon: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: "#FEE2E2",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 14,
    },
    optionTitle: {
        fontSize: 15,
        fontWeight: "600",
        color: "#111827",
    },
    optionSubtitle: {
        fontSize: 13,
        color: "#6B7280",
        marginTop: 2,
        lineHeight: 18,
    },
});
