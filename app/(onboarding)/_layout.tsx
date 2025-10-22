// app/onboarding/_layout.tsx
import { Stack } from "expo-router";
import React from "react";

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="StepTwo" />
      <Stack.Screen name="StepThree" />
    </Stack>
  );
}
