import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ProgressBar from '../components/progressBar';

type LocationSetupProps = {
    activeIndex: number;
    totalSteps: number;
    onNextStep?: () => void;
};

export default function LocationSetup({ activeIndex, totalSteps, onNextStep }: LocationSetupProps) {
    return (
        <View style={styles.container}>
            <ProgressBar activeIndex={activeIndex} totalSteps={totalSteps} />

            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <Ionicons name="location-outline" size={64} color="#EF4444" />
                </View>

                <Text style={styles.title}>Enable Location Services</Text>
                <Text style={styles.description}>
                    We need your location to provide you with real-time updates and
                    accurate information about your surroundings.
                </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={onNextStep}>
                <Text style={styles.buttonText}>Enable Location</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    content: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
    },
    iconContainer: {
        width: 120,
        height: 120,
        backgroundColor: '#FEE2E2',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 12,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: '#6B7280',
        textAlign: 'center',
        paddingHorizontal: 20,
        lineHeight: 24,
    },
    button: {
        backgroundColor: '#EF4444',
        paddingVertical: 16,
        borderRadius: 25,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});