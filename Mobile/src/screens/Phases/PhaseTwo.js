import React, {useState} from "react";
import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import constants from "../../components/constants/Constants";



const PhaseTwo = ({navigation, route}) => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        setCurrentStep(currentStep - 1);
    };




    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return (
                    <ScrollView>
                        <Text style={styles.header}>Soil Fertility Status</Text>
                        <Text style={styles.textLabel}>Soil Texture</Text>
                        <TextInput
                            style={styles.input}

                            onChangeText={(value) => handleChange('soil_texture', value)}
                        />
                        <Text style={styles.textLabel}>Soil Carbon</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="decimal-pad"
                            onChangeText={(value) => handleChange('soil_carbon', value)}
                        />
                        <Text style={styles.textLabel}>Soil Organic Matter</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="decimal-pad"
                            onChangeText={(value) => handleChange('soil_organic_matter', value)}
                        />
                        <Text style={styles.textLabel}>Soil pH</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="decimal-pad"
                            onChangeText={(value) => handleChange('soil_ph', value)}
                        />
                        <Text style={styles.textLabel}>pH Water</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="decimal-pad"
                            onChangeText={(value) => handleChange('ph_water', value)}
                        />
                        <Text style={styles.textLabel}>Phosphorus</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="decimal-pad"
                            onChangeText={(value) => handleChange('phosphorus_m3', value)}
                        />
                    </ScrollView>
                );
            case 1:
                return (
                    <ScrollView>
                        <Text style={styles.header}>Soil Fertility Status</Text>
                        <Text style={styles.textLabel}>Calcium</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="decimal-pad"
                            onChangeText={(value) => handleChange('calcium', value)}
                        />
                        <Text style={styles.textLabel}>Aluminum</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="decimal-pad"
                            onChangeText={(value) => handleChange('aluminum', value)}
                        />
                        <Text style={styles.textLabel}>Moisture Content</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="decimal-pad"
                            onChangeText={(value) => handleChange('moisture', value)}
                        />
                        <Text style={styles.textLabel}>Nitrogen</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="decimal-pad"
                            onChangeText={(value) => handleChange('nitrogen', value)}
                        />
                        <Text style={styles.textLabel}>Potassium</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="decimal-pad"
                            onChangeText={(value) => handleChange('potassium', value)}
                        />
                        <Text style={styles.textLabel}>Magnesium</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="decimal-pad"
                            onChangeText={(value) => handleChange('magnesium', value)}
                        />
                    </ScrollView>
                );

        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                {renderStep()}
                <View style={styles.buttonContainer}>
                    {currentStep > 0 && (
                        <TouchableOpacity onPress={handleBack}>
                            <Text style={styles.buttonText}>Back</Text>
                        </TouchableOpacity>
                    )}
                    {currentStep < 1 ? (
                        <TouchableOpacity onPress={handleNext}>
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: constants.AppColor.grey
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: constants.AppColor.backgroundColor,
    },
    wrap: {
        paddingTop: 5,
        backgroundColor: constants.AppColor.white,
        marginHorizontal: 15,
        borderRadius: 11,
        marginBottom: 10,
        padding: 16,
        flex: 1
    },
    textLabel: {
        fontSize: 20,
        paddingTop: 20,
        color: constants.AppColor.textColor,
        fontWeight: "bold",
        marginHorizontal: 8
    },
    input: {
        height: 45,
        borderWidth: 0.21,
        borderColor: constants.AppColor.inputBorderColor,
        fontSize: 20,
        borderRadius: 8,
        marginTop: 2,
        backgroundColor: constants.AppColor.input,
        paddingLeft: 15,
        marginHorizontal: 10
    },
    buttonText: {
        fontSize: 22,
        fontWeight: "bold",
        backgroundColor: constants.AppColor.green,
        color: constants.AppColor.white,
        borderRadius: 10,
        padding: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',


    },
});

export default PhaseTwo;