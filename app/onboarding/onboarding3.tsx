import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function OnboardingStep3() {
    const router = useRouter();

    const finishOnboarding = async () => {
        await AsyncStorage.setItem("hasSeenOnboarding", "true");
        router.replace("/onboarding/onboarding3"); // go back to main app stack
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>You’re all set 🚀</Text>
            <Button title="Get Started" onPress={finishOnboarding} />
        </View>
    );
}
