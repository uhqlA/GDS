import React from "react";
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    TextInput,
    TouchableOpacity
} from "react-native";
import Geocode from "../Maps/Geocode";
import Constants from "../../components/constants/Constants";
import Fields from "./Fields";

const GeneralInformation = () => {
    const [location, setLocation] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
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
                                {loading && <ActivityIndicator/>}
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
                        <TouchableOpacity>
                            <Text style={styles.button}>Submit</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default GeneralInformation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 70,
        paddingTop: 5,
        paddingLeft: 30,
        paddingRight: 30
    },
    cardPhase: {
        backgroundColor: Constants.AppColor.grey,
        borderRadius: 10,
        borderWidth: 2,
        paddingVertical: 10
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
    textPhase: {
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
    button: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        backgroundColor: Constants.AppColor.green,
        color: Constants.AppColor.white,
        padding: 10,
        marginHorizontal: 60,
        borderRadius: 10,
        borderWidth: 1,
    }
})
