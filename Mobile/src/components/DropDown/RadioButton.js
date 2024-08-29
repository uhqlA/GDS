// App.js

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';



const RadioButtonProject = () => {
    const [selectedValue, setSelectedValue] = useState('option1');

    return (
        <View style={styles.container}>
            <View style={styles.radioGroup}>
                <View style={styles.radioButton}>
                    <RadioButton.Android
                        value="option1"
                        status={selectedValue === 'option1' ?
                            'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('option1')}
                        color="#007BFF"
                    />
                    <Text style={styles.radioLabel}>
                    Phase 1
                    </Text>
                </View>

                <View style={styles.radioButton}>
                    <RadioButton.Android
                        value="option2"
                        status={selectedValue === 'option2' ?
                            'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('option2')}
                        color="#007BFF"
                    />
                    <Text style={styles.radioLabel}>
                        Phase 2
                    </Text>
                </View>

                <View style={styles.radioButton}>
                    <RadioButton.Android
                        value="option3"
                        status={selectedValue === 'option3' ?
                            'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('option3')}
                        color="#007BFF"
                    />
                    <Text style={styles.radioLabel}>
                        Phase 3
                    </Text>
                </View>
                <View style={styles.radioButton}>
                    <RadioButton.Android
                        value="option3"
                        status={selectedValue === 'option4' ?
                            'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('option4')}
                        color="#007BFF"
                    />
                    <Text style={styles.radioLabel}>
                        Phase 4
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default RadioButtonProject;
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioLabel: {
        marginLeft: -8,
        fontSize: 16,
        color: '#333',
    },
});