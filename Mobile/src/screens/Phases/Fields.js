import React, { useMemo, useState } from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';
import Constants from "../../components/constants/Constants";
import DropdownComponent from "../../components/DropDown/DropdownComponent";

const Fields = () => {
    const [text, setText] = useState('');

    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Sector</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Sector"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Infrastructure Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Infrastructure Name"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Infrastructure Type</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Infrastructure Type"
                />
            </View>
            <View style={styles.inputRow}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Cost of the Project</Text>
                    <Text style={styles.label}>(USD/ KES)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Cost of the Project"
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Disbursed Amount </Text>
                    <Text style={styles.label}>(USD/ KES)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Disbursed Amount "
                        keyboardType="numeric"
                    />
                </View>
            </View>
            <Text style={styles.label}>Funding Method</Text>
            <View>
                <DropdownComponent/>
            </View>
            <Text style={styles.label}>Land Acquisition and Registration </Text>
            <View style={styles.inputRow}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Acquired</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Acreage(sqr Meters)"
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Registered</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="(Registration No.)"
                        keyboardType="numeric"
                    />
                </View>
            </View>

        </View>
        </ScrollView>
    );
};

export default Fields
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        fontWeight:"bold",
        color: Constants.AppColor.backgroundColor,
    },
    input: {
        height: 35,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 4,
        backgroundColor: '#fff',
    },
    inputRow:{
        flexDirection: "row",
        justifyContent: "space-between",
    }
});
