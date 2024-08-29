import {
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import * as Location from "expo-location";
import { MaterialCommunityIcons  } from '@expo/vector-icons';
import constants from "../../components/constants/Constants";


const Geocode = ({setLocation,setLoading,loading}) => {
    const [granted, setGranted] = useState(false);

    const getPermissions = async () => {
        setLoading(true)
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            console.log("Please grant location permissions");
            setLoading(false)
            return;
        }
        let currentLocation = await Location.getCurrentPositionAsync({});

        const locationObject = {
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
            altitude: currentLocation.coords.altitude,
        };
        console.log(`latitude ${JSON.stringify(locationObject)}`);
        setLocation(locationObject);
        setLoading(false)
    };

    return (
        <SafeAreaView>
            <TouchableOpacity
                onPress={getPermissions}
                style={[styles.appButtonContainer, loading && {backgroundColor:constants.AppColor.grey}]}
                disabled={loading}
            >
                <Text style={styles.appButtonText}>
                    Get Location {" "}
                    <MaterialCommunityIcons
                        name="crosshairs-gps"
                        size={24}
                        color={"white"}
                        style={{ marginHorizontal: 10}}/>
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    appButtonContainer: {
        backgroundColor: "#F1884D",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 35,
        width: "100%",
        alignSelf: "center",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    appButtonText: {
        fontSize: 24,
        color: "white",
        alignSelf: "center",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "space-between",
        marginLeft:9,
        marginRight: 6

    },
});

export default Geocode;