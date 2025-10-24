import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuth = () => {
    const getToken = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            return token;
        } catch (error) {
            console.error('Error getting auth token:', error);
            return null;
        }
    };

    return {
        getToken,
    };
};