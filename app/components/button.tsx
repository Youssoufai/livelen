import { LucideIcon } from "lucide-react-native"; // 👈 icon type
import React from "react";
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";

type ButtonProps = {
    title: string;
    onPress?: (event: GestureResponderEvent) => void;
    style?: ViewStyle;
    textColor?: string;
    icon?: LucideIcon; // 👈 now accepts a lucide icon component
};

export default function Button({ title, onPress, style, textColor = "#fff", icon: Icon }: ButtonProps) {
    return (
        <TouchableOpacity style={[styles.confirmButton, style]} onPress={onPress}>
            <View style={styles.content}>
                {Icon && <Icon size={20} color={textColor} style={styles.icon} />}
                <Text style={[styles.text, { color: textColor }]}>{title}</Text>

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    confirmButton: {
        backgroundColor: "#de1c1c",
        paddingVertical: 14,
        borderRadius: 25,
        alignItems: "center",
        marginBottom: 20,
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginRight: 8,
    },
    text: {
        fontSize: 16,
        fontWeight: "600",
    },
});
