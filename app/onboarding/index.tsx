import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const [firstTime, setFirstTime] = useState<boolean | null>(null);

  useEffect(() => {
    const checkOnboarding = async () => {
      const seen = await AsyncStorage.getItem("seenOnboarding");
      setFirstTime(!seen); // true if onboarding not seen
    };
    checkOnboarding();
  }, []);

  if (firstTime === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  if (firstTime) {
    return <Redirect href="/onboarding" />;
  } else {
    return <Redirect href="/(tabs)/search" />;
  }
}
