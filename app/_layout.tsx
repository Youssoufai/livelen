// app/onboarding/_layout.tsx
import { Stack } from "expo-router";
import React from "react";

export default function OnboardingLayout() {
    return (
        <Stack >
            <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>

    );
}
