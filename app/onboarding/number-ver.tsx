import React, { useEffect, useMemo, useState } from "react";
import {
    FlatList,
    KeyboardAvoidingView,
    Modal,
    Platform,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

/**
 * NumVerification
 * ----------------
 * A refined, accessible React Native phone number entry component.
 * Props:
 *  - steps (number)         : total number of steps (default 4)
 *  - currentStep (number)   : current step index (1-based)
 *  - onNext (function)      : callback called with normalized E.164 phone string
 *  - defaultCountry (object): { name, code, flag }
 *
 * Notes:
 *  - Phone validation is a lightweight heuristic (7-15 digits). For production
 *    use libphonenumber-js / google-libphonenumber if you need strict parsing.
 *  - This file keeps zero external dependencies and uses a tiny built-in country picker.
 */

const DEFAULT_COUNTRIES = [
    { name: "Nigeria", code: "+234", flag: "🇳🇬" },
    { name: "United States", code: "+1", flag: "🇺🇸" },
    { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
    { name: "Ghana", code: "+233", flag: "🇬🇭" },
    { name: "Kenya", code: "+254", flag: "🇰🇪" },
];

export default function NumVerification({
    steps = 4,
    currentStep = 1,
    onNext,
    defaultCountry = DEFAULT_COUNTRIES[0],
}) {
    const [country, setCountry] = useState(defaultCountry);
    const [phone, setPhone] = useState("");
    const [showPicker, setShowPicker] = useState(false);

    // simple validation: count digits only and require between 7 and 15 digits
    const digits = useMemo(() => phone.replace(/\D/g, ""), [phone]);
    const isValid = useMemo(() => digits.length >= 7 && digits.length <= 15, [digits]);

    useEffect(() => {
        // ensure defaultCountry is set if changed from parent
        setCountry(defaultCountry);
    }, [defaultCountry]);

    function formatE164(rawPhone) {
        const d = rawPhone.replace(/\D/g, "");
        // If the user already entered a country code (starting with the country digits), try to detect
        if (d.startsWith(country.code.replace("+", ""))) {
            return `+${d}`;
        }

        // If the user entered a leading 0 (local format), drop it and prefix country code
        if (d.startsWith("0")) {
            return `${country.code}${d.replace(/^0+/, "")}`;
        }

        // Otherwise prefix the selected country code
        return `${country.code}${d}`;
    }

    function handleNext() {
        if (!isValid) return;
        const e164 = formatE164(phone);
        if (typeof onNext === "function") {
            onNext(e164);
        } else {
            // fallback behaviour for demo/testing

            console.log("NumVerification onNext:", e164);
        }
    }

    function renderProgress() {
        const items = [];
        for (let i = 1; i <= steps; i++) {
            const active = i <= currentStep;
            items.push(
                <View key={`step-${i}`} style={[styles.step, active && styles.stepActive]} />
            );
        }
        return <View style={styles.progressContainer}>{items}</View>;
    }

    return (
        <SafeAreaView style={styles.safe}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                {renderProgress()}

                <Text style={styles.title}>What’s your number?</Text>
                <Text style={styles.subtitle} accessibilityRole="text">
                    We’ll use this to keep your account secure and send important updates (SMS
                    may apply).
                </Text>

                <View style={styles.inputLabelRow}>
                    <Text style={styles.label}>Phone number</Text>
                </View>

                <View style={styles.phoneRow}>
                    <Pressable
                        style={styles.countryCode}
                        onPress={() => setShowPicker(true)}
                        accessibilityRole="button"
                        accessibilityLabel={`Select country (current ${country.name})`}
                        testID="country-pressable"
                    >
                        <Text style={styles.flag}>{country.flag}</Text>
                        <Text style={styles.code}>{country.code}</Text>
                        <Text style={styles.caret}>▾</Text>
                    </Pressable>

                    <TextInput
                        style={styles.input}
                        placeholder="812 345 6789"
                        keyboardType="phone-pad"
                        returnKeyType="done"
                        value={phone}
                        onChangeText={setPhone}
                        accessible
                        accessibilityLabel="Phone number input"
                        maxLength={20}
                        testID="phone-input"
                    />
                </View>

                <Text style={styles.hint}>Enter your phone without the leading "+" or leave it — the field accepts digits only.</Text>

                <TouchableOpacity
                    style={[styles.nextButton, isValid ? styles.nextButtonEnabled : styles.nextButtonDisabled]}
                    activeOpacity={isValid ? 0.8 : 1}
                    onPress={handleNext}
                    disabled={!isValid}
                    accessibilityRole="button"
                    accessibilityState={{ disabled: !isValid }}
                    testID="next-button"
                >
                    <Text style={[styles.nextButtonText, isValid ? styles.nextButtonTextEnabled : styles.nextButtonTextDisabled]}>Next</Text>
                </TouchableOpacity>

                {/* Simple country picker modal */}
                <Modal visible={showPicker} animationType="slide" onRequestClose={() => setShowPicker(false)}>
                    <SafeAreaView style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Select country</Text>
                            <TouchableOpacity onPress={() => setShowPicker(false)} accessibilityRole="button">
                                <Text style={styles.modalClose}>Close</Text>
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            data={DEFAULT_COUNTRIES}
                            keyExtractor={(i) => i.code}
                            renderItem={({ item }) => (
                                <Pressable
                                    style={styles.countryRow}
                                    onPress={() => {
                                        setCountry(item);
                                        setShowPicker(false);
                                    }}
                                >
                                    <Text style={styles.flag}>{item.flag}</Text>
                                    <View style={styles.countryInfo}>
                                        <Text style={styles.countryName}>{item.name}</Text>
                                        <Text style={styles.countryCodeText}>{item.code}</Text>
                                    </View>
                                </Pressable>
                            )}
                            ItemSeparatorComponent={() => <View style={styles.sep} />}
                        />
                    </SafeAreaView>
                </Modal>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: "#fff" },
    container: { flex: 1, paddingHorizontal: 20, paddingTop: 28 },
    // progress
    progressContainer: { flexDirection: "row", marginBottom: 24 },
    step: { flex: 1, height: 4, borderRadius: 4, backgroundColor: "#EEE", marginHorizontal: 4 },
    stepActive: { backgroundColor: "#1E90FF" },

    title: { fontSize: 22, fontWeight: "700", marginBottom: 6 },
    subtitle: { fontSize: 14, color: "#555", marginBottom: 18 },

    inputLabelRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    label: { fontSize: 14, color: "#111", marginBottom: 8 },

    phoneRow: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
    countryCode: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#E6E6E6",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 12,
        marginRight: 10,
        minWidth: 92,
        justifyContent: "space-between",
    },
    flag: { fontSize: 18, marginRight: 8 },
    code: { fontSize: 14, fontWeight: "600" },
    caret: { marginLeft: 6, color: "#666" },

    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 12,
        fontSize: 16,
    },

    hint: { fontSize: 12, color: "#888", marginTop: 6 },

    nextButton: { paddingVertical: 14, borderRadius: 28, alignItems: "center", marginTop: 20 },
    nextButtonDisabled: { backgroundColor: "#F3F4F6" },
    nextButtonEnabled: { backgroundColor: "#1E90FF" },
    nextButtonText: { fontSize: 16, fontWeight: "600" },
    nextButtonTextEnabled: { color: "#fff" },
    nextButtonTextDisabled: { color: "#9CA3AF" },

    // modal
    modalContainer: { flex: 1, backgroundColor: "#fff" },
    modalHeader: { flexDirection: "row", justifyContent: "space-between", padding: 16, borderBottomWidth: 1, borderColor: "#EEE" },
    modalTitle: { fontSize: 18, fontWeight: "700" },
    modalClose: { color: "#1E90FF", fontWeight: "600" },
    countryRow: { flexDirection: "row", alignItems: "center", padding: 16 },
    countryInfo: { marginLeft: 12 },
    countryName: { fontSize: 16 },
    countryCodeText: { fontSize: 13, color: "#666" },
    sep: { height: 1, backgroundColor: "#F3F4F6", marginLeft: 16 },
});
