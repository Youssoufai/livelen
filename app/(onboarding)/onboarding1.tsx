import { Image, StyleSheet, View } from "react-native";

type Onboarding1Props = {
    activeIndex: number;
    totalSteps: number;
    onNextStep?: () => void;
};

export default function Onboarding1({ activeIndex, totalSteps, onNextStep }: Onboarding1Props) {
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
