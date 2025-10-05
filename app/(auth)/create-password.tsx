import React from 'react'
import { Text, TextInput, View } from 'react-native'
import Button from '../components/button'

export default function CreatePassword() {
    return (
        <View>
            <Text>Create and confirm your new password</Text>
            <View>
                <Text>Create new password</Text>
                <TextInput
                    placeholder='Create password'
                />
                <Text>
                    New password should contain a minimum of 8 characters, including one letter, and one number or symbol.
                </Text>
                <Text>Create password</Text>
                <TextInput
                    placeholder='Confirm password'
                />
            </View>
            <Button
                title='Reset Password'
                style={{ backgroundColor: "#EBEBEC" }}
            />
        </View>
    )
}