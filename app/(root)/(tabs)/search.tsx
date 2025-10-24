import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    ImageBackground,
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
                source={{
                    uri: "https://images.unsplash.com/photo-1604079628040-94301bb21b99?q=80&w=2070&auto=format&fit=crop",
                }}
                style={styles.background}
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
                {/* Search Bar */}
                <View style={styles.searchBar}>
                    <Ionicons name="search" size={18} color="#9CA3AF" />
                    <TextInput
                        placeholder="Search places, areas, events"
                        placeholderTextColor="#9CA3AF"
                        style={styles.input}
                    />
                </View>

                {/* Title Section */}
                <Text style={styles.cardTitle}>Get started with Livelens</Text>
                <Text style={styles.cardDesc}>
                    You can also start on your own and choose one of these options later.
                </Text>

                {/* Option 1 */}
                <TouchableOpacity style={styles.option}>
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
                <TouchableOpacity style={styles.option}>
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
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    background: { height: "45%", justifyContent: "flex-end" },
    overlay: { paddingHorizontal: 20, paddingBottom: 30 },
    title: { fontSize: 26, color: "#fff", fontWeight: "700" },
    highlight: { textDecorationLine: "underline" },
    subtitle: { color: "#E5E7EB", fontSize: 14, marginTop: 4 },
    card: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -20,
        padding: 20,
    },
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 10,
        paddingHorizontal: 12,
        height: 48,
    },
    input: { flex: 1, marginLeft: 8, fontSize: 15, color: "#111827" },
    cardTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#111827",
        marginTop: 24,
    },
    cardDesc: { color: "#6B7280", fontSize: 14, marginTop: 6, marginBottom: 16 },
    option: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F9FAFB",
        borderRadius: 12,
        padding: 16,
        marginBottom: 10,
    },
    optionIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#FEE2E2",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },
    optionTitle: { fontSize: 15, fontWeight: "600", color: "#111827" },
    optionSubtitle: { fontSize: 13, color: "#6B7280", marginTop: 2 },
});
