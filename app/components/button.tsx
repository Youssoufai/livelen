import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Button() {
    return (
        <TouchableOpacity style={styles.confirmButton}>
            <Text style={{ color: 'white', fontSize: 16 }}>Create a new account</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    confirmButton: {
        backgroundColor: "#de1c1cff",
        paddingVertical: 14,
        color: "#fff",
        borderRadius: 25,
        fontSize: 19,
        alignItems: "center",
        marginTop: "auto",
        marginBottom: 20,
    },
})