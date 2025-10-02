import React from "react";
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Onboarding2Props = {
    activeIndex: number;
};

export default function Onboarding2({ activeIndex }: Onboarding2Props) {
    return (
        <ImageBackground
            source={require("@/assets/images/scn-image.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                {/* Title */}
                <Text style={styles.title}>
                    Know what’s{"\n"}happening right{"\n"}now, anywhere in{"\n"}Nigeria.
                </Text>

                {/* Get Started Button */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Get started</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width,
        height,
        justifyContent: "flex-end",
    },
    overlay: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    title: {
        fontSize: 26,
        fontWeight: "700",
        color: "#fff",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#fff",
        borderRadius: 25,
        paddingVertical: 14,
        alignItems: "center",
    },
    buttonText: {
        color: "#000",
        fontSize: 16,
        fontWeight: "600",
    },
});
