// app/onboarding/success.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SuccessScreen() {
    const router = useRouter();

    const finishOnboarding = async () => {
        await AsyncStorage.setItem("seenOnboarding", "true"); // 🔴 Save onboarding state
        router.replace("/(tabs)/search"); // Redirect to auth
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🎉 You’re In!</Text>
            <Text>
                Your account is active, and you can start exploring live updates right now.
            </Text>
            <TouchableOpacity style={styles.button} onPress={finishOnboarding}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
    button: { backgroundColor: "red", padding: 15, borderRadius: 10 },
    buttonText: { color: "#fff", fontWeight: "bold" },
});
