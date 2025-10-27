import React from 'react';
import { Image, Text, View } from 'react-native';

export default function RequestSuccess() {
    return (
        <View>
            <Image
                source={require('@/assets/images/group.png')}
                style={{ width: 100, height: 100, alignSelf: 'center', marginBottom: 20 }}
            />
            <Text>Your request has been posted!</Text>
            <Text>Your request is now visible to the wider public. Expect some responses soon</Text>
        </View>
    );
}
