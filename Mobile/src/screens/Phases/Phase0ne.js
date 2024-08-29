import React from "react";
import {View, StyleSheet, Text, SafeAreaView, ScrollView, ActivityIndicator, TextInput} from "react-native";
import Geocode from "../Maps/Geocode";
import Constants from "../../components/constants/Constants";

import Fields from "./Fields";
const Phase0ne = () => {
    // const [value, setValue] = React.useState(null);
    const [location, setLocation] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Text style={styles.textPhase}>
                        General Information
                    </Text>
                    <View style={styles.cardPhase}>
                    <View style={styles.header}>
                        <View
                            style={{
                                backgroundColor: "#F0F1F6",
                                alignItems: "center",
                                height: 120,
                                width: 296,
                                paddingBottom: 10,
                                borderWidth: .5,
                                borderColor: "black",
                                borderRadius: 10,
                            }}
                        >
                            {loading && <ActivityIndicator />}
                            {location != null && !loading ? (
                                <Text style={styles.textLabelCoord}>
                                    {" "}
                                    {location.longitude}, {location.latitude}
                                </Text>
                            ) : (
                                <Text style={styles.textLabelCoord}>
                                    Press button to get location
                                </Text>
                            )}
                            <Geocode
                                setLocation={setLocation}
                                setLoading={setLoading}
                                loading={loading}
                            />
                        </View>

                    </View>


                        <Fields/>
                   </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Phase0ne;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 70,
        paddingTop: 65,
        paddingLeft: 30,
        paddingRight: 30
    },
    cardPhase:{
        backgroundColor:Constants.AppColor.grey,
        // padding:15,
        // margin:5,
        borderRadius:10,
        borderWidth:2,
        paddingVertical:10
    },
    header: {
        alignItems: "center",
    },
    textLabelCoord: {
        fontSize: 20,
        paddingTop: 1,
        paddingBottom: 20,
        color: "#483D8B",
        fontWeight: "bold",
    },
    textPhase:{
        fontSize: 25,
        fontWeight: "bold",
        paddingVertical: 10,
        textAlign: "center",
        color: Constants.AppColor.backgroundColor,
    },
    input: {
        height: 30,
        margin: 12,
        borderWidth: 1,
        padding: 10,

    },


})