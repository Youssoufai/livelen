// app/onboarding/_layout.tsx
import { Stack } from "expo-router";
import React from "react";

export default function OnboardingLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="create-account" />
            <Stack.Screen name="last-step" />
            <Stack.Screen name="number-ver" />
            <Stack.Screen name="phoneVerification" />
            <Stack.Screen name="success" />
        </Stack>
    );
}
