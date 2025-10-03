import React from "react";
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

type ButtonProps = {
    title: string;
    onPress?: (event: GestureResponderEvent) => void;
    style?: ViewStyle;
    textColor?: string; // 👈 new prop
};

export default function Button({ title, onPress, style, textColor }: ButtonProps) {
    return (
        <TouchableOpacity style={[styles.confirmButton, style]} onPress={onPress}>
            <Text style={[styles.text, { color: textColor }]}>{title}</Text>
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
    text: {
        fontSize: 16,
        fontWeight: "600",
    },
});
