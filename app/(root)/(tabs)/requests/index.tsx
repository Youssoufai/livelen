import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Request() {
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Ionicons name="chevron-back" size={24} color="#000" />
            </View>

            {/* Step Text */}
            <Text style={styles.stepText}>Step 1 of 4</Text>

            {/* Title */}
            <Text style={styles.title}>Create request</Text>

            {/* Label */}
            <Text style={styles.label}>
                Specify the location where you need updates from.
            </Text>

            {/* Location Input */}
            <View style={styles.inputContainer}>
                <Ionicons name="search-outline" size={18} color="#999" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Choose location"
                    placeholderTextColor="#999"
                    value={location}
                    onChangeText={setLocation}
                />
            </View>

            {/* Description */}
            <Text style={[styles.label, { marginTop: 20 }]}>
                Describe what respondents should focus on when capturing content for you.
            </Text>

            <TextInput
                style={styles.textArea}
                placeholder="E.x: Take a picture of the pool"
                placeholderTextColor="#999"
                value={description}
                onChangeText={setDescription}
                multiline
            />

            {/* Next Button */}
            <TouchableOpacity onPress={() => { router.push("/requests/requestCondition") }} style={[styles.button, !(location && description) && styles.buttonDisabled]}>
                <Text style={[styles.buttonText, !(location && description) && styles.buttonTextDisabled]}>
                    Next
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        marginTop: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    inputIcon: {
        marginRight: 6,
    },
    input: {
        flex: 1,
        fontSize: 15,
        color: '#000',
    },
    textArea: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        height: 100,
        marginTop: 10,
        padding: 12,
        fontSize: 15,
        color: '#000',
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#000',
        borderRadius: 10,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 30,
    },
    buttonDisabled: {
        backgroundColor: '#f2f2f2',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    buttonTextDisabled: {
        color: '#999',
    },
});
