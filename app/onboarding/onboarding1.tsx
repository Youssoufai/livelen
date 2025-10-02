import { Image, StyleSheet, View } from "react-native";

export default function Onboarding1() {
    return (
        <View style={styles.container}>
            <Image
                source={require("@/assets/images/logo.png")}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    image: { width: 200, height: 200 },
});
