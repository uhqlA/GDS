import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Assuming you're using this for icons

const Login = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.timeText}>9:26 AM Wed Jan 27</Text>
                <View style={styles.headerRight}>
                    <Icon name="notifications" size={25} color="#fff" />
                    <Icon name="account-circle" size={25} color="#fff" />
                </View>
            </View>

            {/* Greeting Section */}
            <View style={styles.greetingSection}>
                <Text style={styles.greetingText}>Good Morning,</Text>
                <Text style={styles.userName}>KELVIN K.</Text>
            </View>

            {/* Main Services */}
            <View style={styles.mainServices}>
                <View style={styles.serviceRow}>
                    <ServiceItem iconName="phone" label="BUY AIRTIME" />
                    <ServiceItem iconName="send" label="CASH TRANSFERS" />
                    <ServiceItem iconName="credit-card" label="CARD SERVICES" />
                </View>
                <View style={styles.serviceRow}>
                    <ServiceItem iconName="mobile-friendly" label="SEND TO MPESA" />
                    <ServiceItem iconName="atm" label="WITHDRAW" />
                    <ServiceItem iconName="school" label="SCHOOL FEES" />
                </View>
            </View>

            {/* Extra Services */}
            <View style={styles.extraServices}>
                <ServiceItem iconName="language" label="GLOBAL TRANSFERS" />
                <ServiceItem iconName="settings" label="VOOMA SERVICES" />
            </View>

            {/* Paybill Section */}
            <TouchableOpacity style={styles.paybillSection}>
                <Icon name="receipt" size={25} color="#000" />
                <Text style={styles.paybillText}>Make Utility Payments</Text>
            </TouchableOpacity>

            {/* Footer Navigation */}
            <View style={styles.footerNavigation}>
                <Icon name="home" size={30} color="#000" />
                <Icon name="qr-code-scanner" size={30} color="#000" />
                <Icon name="attach-money" size={30} color="#000" />
                <Icon name="account-circle" size={30} color="#000" />
            </View>
        </ScrollView>
    );
};

const ServiceItem = ({ iconName, label }) => (
    <TouchableOpacity style={styles.serviceItem}>
        <Icon name={iconName} size={30} color="#fff" />
        <Text style={styles.serviceText}>{label}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#3a8c3b',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    timeText: {
        color: '#fff',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    greetingSection: {
        padding: 20,
        backgroundColor: '#3a8c3b',
    },
    greetingText: {
        color: '#fff',
        fontSize: 18,
    },
    userName: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    mainServices: {
        padding: 20,
    },
    serviceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    serviceItem: {
        alignItems: 'center',
        width: '30%',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ddd', // Use gradient or specific colors if needed
    },
    serviceText: {
        marginTop: 10,
        color: '#000',
        textAlign: 'center',
    },
    extraServices: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    paybillSection: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f0f0',
        margin: 20,
        borderRadius: 10,
    },
    paybillText: {
        marginLeft: 10,
        fontSize: 16,
    },
    footerNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
        backgroundColor: '#eaeaea',
    },
});

export default Login;