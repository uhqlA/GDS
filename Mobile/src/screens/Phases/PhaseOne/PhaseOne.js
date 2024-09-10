import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import constants from "../../../components/constants/Constants";
import Constants from "../../../components/constants/Constants";

const PhaseOne = ({ navigation, route }) => {
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
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        <View style={styles.container}>
                            <View style={styles.headerInfo}>
                                <Text style={styles.labelInfo}>Initial Phase Cost:</Text>
                                <TextInput
                                    style={styles.inputInfor}
                                    placeholder="Initial Phase Cost"
                                    keyboardType="numeric"
                                />
                            </View>

                            <View style={styles.inputRow}>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.label}>Adjusted Phase cost</Text>
                                    <Text style={styles.label}>(USD/ KES)</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Adjusted Phase cost"
                                        keyboardType="numeric"
                                    />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.label}>Disbursed Amount</Text>
                                    <Text style={styles.label}>(USD/ KES)</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Disbursed Amount"
                                        keyboardType="numeric"
                                    />
                                </View>
                            </View>

                            <View style={styles.textAreaSection}>
                                <Text style={styles.textLabel}>Contractors:</Text>
                                <TextInput
                                    style={styles.textArea}
                                    placeholder="Provide a list if necessary"
                                    placeholderTextColor="#2C2646A1"
                                    multiline
                                />
                            </View>

                            <View style={styles.textAreaSection}>
                                <Text style={styles.textLabel}>Consultants:</Text>
                                <TextInput
                                    style={styles.textArea}
                                    placeholder="Provide a list if necessary"
                                    placeholderTextColor="#2C2646A1"
                                    multiline
                                />
                            </View>
                        </View>
                        <View>
                            <Text style= {styles.textVolume}>Volume (Cubic Meters)</Text>
                            <View style={styles.inputRow}>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.textInput}>Designed</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="(cubic meters...)"
                                        keyboardType="numeric"
                                    />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.textInput}>Observed</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="(cubic meters...)"
                                        keyboardType="numeric"
                                    />
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style= {styles.textVolume}>Dam Height (Meters) </Text>
                            <View style={styles.inputRow}>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.textInput}>Designed</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="( meters...)"
                                        keyboardType="numeric"
                                    />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.textInput}>Observed</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="( meters...)"
                                        keyboardType="numeric"
                                    />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                );
            case 1:
                return (
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        <View>
                            <Text style= {styles.textVolume}>Dam Length (Dam Top Kilometers) </Text>
                            <View style={styles.inputRow}>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.textInput}>Designed</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="(cubic meters...)"
                                        keyboardType="numeric"
                                    />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.textInput}>Observed</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="(cubic meters...)"
                                        keyboardType="numeric"
                                    />
                                </View>
                            </View>
                        </View>
                        <Text style={styles.textSpill}>Spillway</Text>
                        <View>
                            <Text style= {styles.textVolume}>Longest Crest (Meters)  </Text>
                            <View style={styles.inputRow}>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.textInput}>Designed</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="(In Kilometers...)"
                                        keyboardType="numeric"
                                    />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.textInput}>Observed</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="(In Kilometers...)"
                                        keyboardType="numeric"
                                    />
                                </View>
                            </View>
                        </View>
                        <Text style={styles.textSpill}>Diversion Tunnel/Outlet</Text>
                        <View>
                            <Text style= {styles.textVolume}>Tunnel 1 (Meters)  </Text>
                            <View style={styles.inputRow}>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.textInput}>Designed</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="(In Meters...)"
                                        keyboardType="numeric"
                                    />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.textInput}>Observed</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="(In Meters...)"
                                        keyboardType="numeric"
                                    />
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style= {styles.textVolume}>Tunnel 2 (Meters)  </Text>
                            <View style={styles.inputRow}>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.textInput}>Designed</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="(In Meters...)"
                                        keyboardType="numeric"
                                    />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.textInput}>Observed</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="(In Meters...)"
                                        keyboardType="numeric"
                                    />
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style= {styles.textVolume}>Diameter (Meters)  </Text>
                            <View style={styles.inputRow}>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.textInput}>Designed</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="(In Meters...)"
                                        keyboardType="numeric"
                                    />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.textInput}>Observed</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="(In Meters...)"
                                        keyboardType="numeric"
                                    />
                                </View>
                            </View>
                        </View>
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
        padding: 10,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: constants.AppColor.backgroundColor,
    },
    wrap: {
        paddingTop: 5,
        backgroundColor: constants.AppColor.grey,
        borderRadius: 11,
        borderWidth: 1,
        padding: 16,
        marginBottom: 10,
    },
    headerInfo: {
        flexDirection: 'row',
        gap: 10,
        paddingVertical: 10,
    },
    labelInfo: {
        alignSelf:"center",
        fontSize: 16,
        fontWeight: "bold",
        color: Constants.AppColor.backgroundColor,
    },
    inputInfor: {
        height: 35,
        borderColor: constants.AppColor.grey,
        borderWidth: 1,
        paddingHorizontal: 8,
        borderRadius: 4,
        backgroundColor: constants.AppColor.white,
        width: '70%',
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 18,
        color: Constants.AppColor.black,
        textAlign: "center",
    },
    input: {
        height: 35,
        borderColor: "gray",
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 4,
        backgroundColor: constants.AppColor.white,
    },
    inputRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    buttonText: {
        fontSize: 22,
        fontWeight: "bold",
        backgroundColor: constants.AppColor.green,
        color: constants.AppColor.white,
        borderRadius: 10,
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textLabel: {
        fontSize: 18,
        color: constants.AppColor.black,
        marginBottom:2,
    },
    textAreaSection: {
        marginBottom: 3,
    },
    textArea: {
        height: 100,
        fontSize: 16,
        borderColor: constants.AppColor.grey,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: constants.AppColor.white,
        padding: 15,
        textAlignVertical: 'top',
    },
    textVolume:{
        textAlign: "center",
        fontSize:18,
        paddingTop:3,
        paddingBottom:5,
    },
    textInput: {
        fontSize:18,
        textAlign: "center"
    },
    textSpill:{
        textAlign: "center",
        fontSize:20,
        paddingBottom:5,
        color:constants.AppColor.backgroundColor,
        fontWeight: "500"
    }
});

export default PhaseOne;
