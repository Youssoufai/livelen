import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

import ConfirmEmail from "./confirm-email";
import CreateAccount from "./create-account";
import LocationSetup from "./location-setup";
import Onboarding1 from "./onboarding1";
import Onboarding2 from "./onboarding2";
import SuccessScreen from "./success";
const { width, height } = Dimensions.get("window");

export default function OnboardingSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    Onboarding1,
    Onboarding2,
    CreateAccount,
    ConfirmEmail,
    LocationSetup,
    SuccessScreen
  ];

  return (
    <View style={{ flex: 1 }}>
      <SwiperFlatList
        index={0}
        onChangeIndex={({ index }) => setActiveIndex(index)}
        showPagination={false}
      >
        {slides.map((Component, i) => (
          <View key={i} style={styles.child}>
            <Component
              activeIndex={activeIndex}
              totalSteps={slides.length}
            />
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
    backgroundColor: "#fff",
  },
});
