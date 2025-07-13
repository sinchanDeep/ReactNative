import 'react-native-get-random-values';
import { getRandomValues } from 'expo-crypto';

// 💡 Ensure global.crypto is defined before crypto-js is imported
if (typeof global.crypto === 'undefined') {
    global.crypto = {
        getRandomValues,
    } as Crypto;
}
