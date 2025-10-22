// app/onboarding/index.tsx
import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

import CreateAccount from "./(onboarding)/create-account";
import LastStep from "./(onboarding)/last-step";
import Location from "./(onboarding)/location-setup";
import Onboarding1 from "./(onboarding)/onboarding1";
import Onboarding2 from "./(onboarding)/onboarding2";
import SuccessScreen from "./(onboarding)/success";

const { width, height } = Dimensions.get("window");

export default function OnboardingSwiper() {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        <Onboarding1 key="onb1" />,
        <Onboarding2 key="onb2" activeIndex={activeIndex} />,
        <CreateAccount key="create" onNext={() => setActiveIndex(activeIndex + 1)} />,
        <LastStep key="last" />,
        <Location key="location" />,
        <SuccessScreen key="success" />,
    ];

    return (
        <View style={{ flex: 1 }}>
            <SwiperFlatList
                index={0}
                onChangeIndex={({ index }) => setActiveIndex(index)}
            // showPagination={false} if you don’t want dots
            >
                {slides.map((Component, i) => (
                    <View key={i} style={styles.child}>
                        {Component}
                    </View>
                ))}
            </SwiperFlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    child: {
        width,
        height,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
});
