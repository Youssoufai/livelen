import React from "react";
import { StyleSheet, View } from "react-native";

type ProgressBarProps = {
    activeIndex: number;
    totalSteps: number;
};

export default function ProgressBar({ activeIndex, totalSteps }: ProgressBarProps) {
    return (
        <View style={styles.container}>
            {Array.from({ length: totalSteps }).map((_, i) => (
                <View
                    key={i}
                    style={[
                        styles.bar,
                        { backgroundColor: i <= activeIndex ? "#EF4444" : "#ccc" },
                    ]}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        marginBottom: 40,
        marginTop: 20,
    },
    bar: {
        height: 4,
        width: 50,
        borderRadius: 2,
    },
});
