import React from "react";
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";

type ButtonProps = {
    title: string;
    onPress?: (event: GestureResponderEvent) => void;
    style?: ViewStyle;
    textColor?: string;
    icon?: React.ReactNode; // 👈 accept any icon component now
};

export default function Button({ title, onPress, style, textColor = "#fff", icon }: ButtonProps) {
    return (
        <TouchableOpacity style={[styles.confirmButton, style]} onPress={onPress}>
            <View style={styles.content}>
                {icon && <View style={styles.icon}>{icon}</View>}
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
