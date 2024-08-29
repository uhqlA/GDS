import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Constants from "../../components/constants/Constants";

const Register = () => {
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Sector</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Sector"
                    value={text}
                    onChangeText={(newText) => setText(newText)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Infrastructure Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Infrastructure Name"
                    value={text}
                    onChangeText={(newText) => setText(newText)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Infrastructure Type</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Infrastructure Type"
                    value={text}
                    onChangeText={(newText) => setText(newText)}
                />
            </View>
        </View>
    );
};

export default Register
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
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 4,
        backgroundColor: '#fff',
    },
});
