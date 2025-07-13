// app/DecodeQr/DecodeQr.tsx

import {Camera, CameraView} from 'expo-camera';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import {decryptQr} from './decode';

export default function DecodeQr() {
    const router = useRouter();
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [value,setValue] = useState("");
    useEffect(() => {
        (async () => {

            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    useEffect(() => {
        if(!(value == null || value == "")) {
            console.log("hello")
            router.push({pathname: "/DecodeQr/ViewData", params: {value}});
        }
    }, [value]);

    if (hasPermission === null) return <View />;
    if (!hasPermission) return <Text>No camera access</Text>;

    return (
        <>

        <View>
            <Text>{value}</Text>
        </View>
        <View style={styles.container}>

            <CameraView
                style={StyleSheet.absoluteFillObject}
                facing="back"
                onBarcodeScanned={({ data }) =>{
                    setValue(decryptQr(data));
                }}
            />

        </View>
            </>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    camera: { flex: 1 },
});
