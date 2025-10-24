// app/onboarding/index.tsx
import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

import ConfirmEmail from "./(onboarding)/confirm-email";
import CreateAccount from "./(onboarding)/create-account";
import LocationSetup from "./(onboarding)/location-setup";
import Onboarding1 from "./(onboarding)/onboarding1";
import Onboarding2 from "./(onboarding)/onboarding2";

const { width, height } = Dimensions.get("window");

export default function OnboardingSwiper() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [canSwipe, setCanSwipe] = useState(false);

    const handleIndexChange = ({ index }: { index: number }) => {
        // Only allow moving back or if canSwipe is true
        if (index < activeIndex || canSwipe) {
            console.log('Current slide index:', index);
            setActiveIndex(index);
            setCanSwipe(false); // Reset swipe permission after each slide change
        }
    };

    const totalSteps = 3; // Only counting the main steps (CreateAccount, LastStep, LocationSetup)
    const handleNext = () => {
        setCanSwipe(true); // Enable swiping when next is clicked (form is valid)
        setActiveIndex(activeIndex + 1);
    };

    // Progress bar should only show in the main flow (CreateAccount, ConfirmEmail, Location)
    const getProgressIndex = (index: number) => {
        // First two screens don't show progress bar
        if (index <= 1) return -1;
        // Main flow starts at index 2
        return index - 2;
    };

    const slides = [
        <Onboarding1
            key="onb1"
            activeIndex={getProgressIndex(0)}
            totalSteps={totalSteps}
            onNextStep={handleNext}
        />,
        <Onboarding2
            key="onb2"
            activeIndex={getProgressIndex(1)}
            totalSteps={totalSteps}
            onNextStep={handleNext}
        />,
        <CreateAccount
            key="create"
            activeIndex={getProgressIndex(2)}
            totalSteps={totalSteps}
            onNextStep={handleNext}
        />,
        <LocationSetup
            key="location"
            activeIndex={getProgressIndex(4)}
            totalSteps={totalSteps}
            onNextStep={handleNext}
        />,
        <ConfirmEmail
            key="confirm"
            activeIndex={getProgressIndex(3)}
            totalSteps={totalSteps}
            onNextStep={handleNext}
        />,
        <LocationSetup
            key="location"
            activeIndex={getProgressIndex(4)}
            totalSteps={totalSteps}
            onNextStep={handleNext}
        />,
    ];

    return (
        <View style={{ flex: 1 }}>
            <SwiperFlatList
                index={activeIndex}
                onChangeIndex={handleIndexChange}
                showPagination={false}
                data={slides}
                scrollEnabled={false} // Disable all swipe gestures
                disableGesture={true} // Additional gesture disable
                renderItem={({ item }) => (
                    <View style={styles.child}>
                        {item}
                    </View>
                )}
                keyExtractor={(_, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    child: {
        width,
        height,
        backgroundColor: "#fff",
    },
});