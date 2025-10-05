import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Login() {
    return (
        <View>
            <View>
                <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
            </View>
            <Text>Welcome Back</Text>
            <View>
                <Text>Email Address</Text>
                <TextInput


                />
            </View>
            <View>
                <Text>Password</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
    },
});