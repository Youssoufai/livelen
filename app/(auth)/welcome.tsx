import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Button from '../components/button'

export default function Welcome() {
    return (
        <View>
            <View>
                <Image source={require('@/assets/images/logo.png')} />
            </View>
            <Text>Welcome to Livelens</Text>
            <Text>Location insights at your fingertips</Text>
            <View>
                <Image source={require('@/assets/images/welcome.png')} />
            </View>
            <View>
                <Button />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    confirmButton: {
        backgroundColor: "#ddd",
        paddingVertical: 14,
        borderRadius: 25,
        alignItems: "center",
        marginTop: "auto",
        marginBottom: 20,
    },
})