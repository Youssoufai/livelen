import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function SearchPostsScreen() {
    return (
        <View style={styles.container}>
            {/* Top Search Bar */}
            <View style={styles.searchBarContainer}>
                <View style={styles.searchBar}>
                    <Ionicons name="search" size={18} color="#9CA3AF" />
                    <TextInput
                        placeholder="nosta cafe"
                        placeholderTextColor="#111827"
                        style={styles.searchInput}
                        defaultValue="nosta cafe"
                    />
                </View>
                <Ionicons name="options-outline" size={22} color="#111827" />
            </View>

            {/* Filters */}
            <View style={styles.filtersRow}>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterText}>Date posted</Text>
                    <Ionicons name="chevron-down" size={14} color="#111827" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterText}>Sort by</Text>
                    <Ionicons name="chevron-down" size={14} color="#111827" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterText}>Has responses</Text>
                    <Ionicons name="chevron-down" size={14} color="#111827" />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Results Info */}
                <Text style={styles.resultsInfo}>
                    23 search results for{" "}
                    <Text style={styles.highlight}>
                        The Nosta Cafe & Grills, 900110
                    </Text>{" "}
                    closest to you
                </Text>

                {/* Post 1 */}
                <TouchableOpacity
                    style={styles.postCard}
                    activeOpacity={0.7}
                    onPress={() => router.push("/(root)/(tabs)/search/posts-details")}
                >
                    <View style={styles.postHeader}>
                        <View style={styles.avatarPlaceholder} />
                        <View>
                            <Text style={styles.name}>Emeka Chukwuka</Text>
                            <Text style={styles.location}>
                                Federal Capital Territory, 900110
                            </Text>
                        </View>
                    </View>

                    <Text style={styles.postQuestion}>
                        Has the queue at the even center subsided?
                    </Text>

                    <Text style={styles.requestLocation}>
                        Request location:{" "}
                        <Text style={styles.link}>9472 W Monroe Street</Text>
                    </Text>

                    <View style={styles.responseCard}>
                        <View style={styles.responseLeft}>
                            <View style={styles.smallAvatar} />
                            <View>
                                <Text style={styles.responseName}>John Ackerman</Text>
                                <Text style={styles.responseTime}>Responder • 2d ago</Text>
                            </View>
                        </View>
                        <Text style={styles.responseText}>
                            They’re currently running a discount so the place is packed.
                        </Text>
                    </View>
                </TouchableOpacity>

                {/* Post 2 */}
                <View style={styles.postCard}>
                    <View style={styles.postHeader}>
                        <View style={styles.avatarPlaceholder} />
                        <View>
                            <Text style={styles.name}>Timothy Weimann</Text>
                            <Text style={styles.location}>Abuja, 900110</Text>
                        </View>
                    </View>

                    <Text style={styles.postQuestion}>
                        Forem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>

                    <Text style={styles.requestLocation}>
                        Request location:{" "}
                        <Text style={styles.link}>9472 W Monroe Street</Text>
                    </Text>

                    <View style={styles.responseCard}>
                        <View style={styles.responseLeft}>
                            <View style={styles.smallAvatar} />
                            <View>
                                <Text style={styles.responseName}>John Ackerman</Text>
                                <Text style={styles.responseTime}>Responder • 2d ago</Text>
                            </View>
                        </View>
                        <Text style={styles.responseText}>
                            They’re currently running a discount so the place is packed.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    searchBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    searchBar: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F9FAFB",
        borderRadius: 10,
        paddingHorizontal: 12,
        height: 40,
        marginRight: 10,
        borderWidth: 1,
        borderColor: "#E5E7EB",
    },
    searchInput: {
        flex: 1,
        marginLeft: 6,
        fontSize: 15,
        color: "#111827",
    },
    filtersRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 18,
        marginBottom: 16,
    },
    filterButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F9FAFB",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: "#E5E7EB",
    },
    filterText: {
        color: "#111827",
        fontSize: 13,
        fontWeight: "500",
        marginRight: 4,
    },
    resultsInfo: {
        color: "#6B7280",
        fontSize: 13,
        marginBottom: 16,
    },
    highlight: {
        fontWeight: "600",
        color: "#111827",
    },
    postCard: {
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#E5E7EB",
        paddingBottom: 18,
        marginBottom: 18,
    },
    postHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    avatarPlaceholder: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "#E5E7EB",
        marginRight: 10,
    },
    name: {
        fontSize: 14,
        fontWeight: "600",
        color: "#111827",
    },
    location: {
        fontSize: 12,
        color: "#6B7280",
    },
    postQuestion: {
        fontSize: 15,
        color: "#111827",
        marginBottom: 6,
    },
    requestLocation: {
        fontSize: 13,
        color: "#6B7280",
        marginBottom: 10,
    },
    link: {
        color: "#2563EB",
        textDecorationLine: "underline",
    },
    responseCard: {
        backgroundColor: "#F9FAFB",
        borderRadius: 10,
        padding: 10,
        marginTop: 4,
    },
    responseLeft: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 6,
    },
    smallAvatar: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: "#E5E7EB",
        marginRight: 8,
    },
    responseName: {
        fontSize: 13,
        fontWeight: "600",
        color: "#111827",
    },
    responseTime: {
        fontSize: 11,
        color: "#9CA3AF",
    },
    responseText: {
        fontSize: 13,
        color: "#4B5563",
        lineHeight: 18,
    },
});
