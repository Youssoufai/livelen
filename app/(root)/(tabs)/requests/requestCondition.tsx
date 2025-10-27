import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Request() {
    const router = useRouter();
    const [duration, setDuration] = useState('');
    const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>([
        { id: '1', label: 'Yes', value: 'yes' },
        { id: '2', label: 'No', value: 'no' },
    ]);

    const onPressRadioButton = (radioArray: RadioButtonProps[]) => {
        setRadioButtons(radioArray);
        const selected = radioArray.find((r) => r.selected);
        console.log('Allow comments:', selected?.value === 'yes');
    };

    return (
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="chevron-back" size={24} color="#000" />
                    </TouchableOpacity>
                </View>

                {/* Step Text */}
                <Text style={styles.stepText}>Step 2 of 4</Text>

                {/* Title */}
                <Text style={styles.title}>Set request conditions</Text>

                {/* Label */}
                <Text style={styles.label}>
                    Choose a time duration for which the request must be completed.
                </Text>

                {/* Duration Picker */}
                <View style={styles.inputContainer}>
                    <Picker
                        selectedValue={duration}
                        style={styles.picker}
                        onValueChange={(itemValue) => setDuration(itemValue)}
                    >
                        <Picker.Item label="Select duration" value="" color="#999" />
                        <Picker.Item label="1 hour" value="1h" />
                        <Picker.Item label="3 hours" value="3h" />
                        <Picker.Item label="6 hours" value="6h" />
                        <Picker.Item label="12 hours" value="12h" />
                        <Picker.Item label="24 hours" value="24h" />
                    </Picker>
                </View>

                {/* Allow Comments Section */}
                <Text style={[styles.label, { marginTop: 24 }]}>
                    Allow respondents to write comments based on their experience.
                </Text>

                <View style={styles.radioContainer}>
                    <RadioGroup
                        radioButtons={radioButtons}
                        onPress={onPressRadioButton}
                        layout="row"
                    />
                </View>
            </View>

            {/* Fixed Bottom Button */}
            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity
                    onPress={() => {
                        console.log('Navigating to /requests/reward');
                        router.push('/requests/reward');
                    }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
    },
    header: {
        marginTop: 8,
        marginBottom: 8,
    },
    stepText: {
        color: '#888',
        fontSize: 13,
        marginTop: 8,
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: '#000',
        marginTop: 4,
    },
    label: {
        fontSize: 14,
        color: '#444',
        marginTop: 16,
        lineHeight: 20,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        marginTop: 10,
        paddingHorizontal: 8,
    },
    picker: {
        height: 44,
        fontSize: 15,
        color: '#000',
    },
    radioContainer: {
        marginTop: 10,
    },
    bottomButtonContainer: {
        paddingHorizontal: 24,
        paddingBottom: 24,
    },
    button: {
        backgroundColor: '#000',
        borderRadius: 10,
        paddingVertical: 14,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});
