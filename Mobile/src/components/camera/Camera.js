import React, { useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

const CameraVision = () => {
    const cameraRef = useRef(null);
    const devices = useCameraDevices();
    const device = devices.back;

    const takePhoto = async () => {
        if (cameraRef.current == null) return;
        const photo = await cameraRef.current.takePhoto({
            flash: 'on',
        });
        console.log(photo);
    };

    if (device == null) return <Text>Loading...</Text>;

    return (
        <View style={styles.container}>
            <Camera
                ref={cameraRef}
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
                photo={true}
            />
            <TouchableOpacity onPress={takePhoto} style={styles.captureButton}>
                <Text style={styles.buttonText}>Capture</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    captureButton: {
        position: 'absolute',
        bottom: 30,
        width: 100,
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CameraVision;
