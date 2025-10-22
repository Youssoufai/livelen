import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ProgressBar from "../components/progressBar";

export default function OnboardingStep3() {
    const router = useRouter();

    const finishOnboarding = async () => {
        await AsyncStorage.setItem("hasSeenOnboarding", "true");
        router.replace("/(onboarding)/onboarding3"); // go back to main app stack
    };

    return (
        <View style={styles.container}>
            <ProgressBar activeIndex={2} totalSteps={3} />

            <View style={styles.content}>
                <Text style={styles.title}>You&apos;re all set 🚀</Text>
                <Text style={styles.subtitle}>
                    Your account is ready to use. Get started with LiveLens!
                </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={finishOnboarding}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 12,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: '#EF4444',
        paddingVertical: 16,
        borderRadius: 25,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});
