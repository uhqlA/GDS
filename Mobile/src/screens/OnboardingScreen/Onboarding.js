import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Constants from "../../components/constants/Constants";

const Onboarding = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerRight}>

                    <Image
                        source={{
                            uri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual user profile URL
                        }}
                        style={styles.profileImage}
                    />
                </View>
            </View>

            {/* Greeting Section */}
            <View style={styles.greetingSection}>
                <Text style={styles.greetingText}>Good Afternoon,</Text>
                <Text style={styles.userName}>ALPHONCE M.</Text>
            </View>

            {/* Main Services */}
            <View style={styles.mainServices}>
                <View style={styles.serviceRow}>
                    <ServiceItem iconName="phone" label="SEND TO MOBILE" />
                    <ServiceItem iconName="send" label="BANK TRANSFERS" />
                    <ServiceItem iconName="credit-card" label="BUY AIRTIME" />
                </View>
                <View style={styles.serviceRow}>
                    <ServiceItem iconName="shield" label="KCB INSURANCE" />
                    <ServiceItem iconName="atm" label="WITHDRAW" />
                    <ServiceItem iconName="account-balance-wallet" label="CARD SERVICES" />
                </View>
            </View>

            {/* Vooma Pay Section */}
            <Text style={styles.sectionTitle}>VOOMA PAY:</Text>
            <View style={styles.voomaPaySection}>
                <ServiceItem iconName="receipt" label="PAY BILL" />
                <ServiceItem iconName="shopping-cart" label="BUY GOODS" />
                <ServiceItem iconName="school" label="LIPA KARO" />
            </View>

            {/* Deals Section */}
            <Text style={styles.sectionTitle}>DEALS:</Text>

            {/* Footer Navigation */}
            <View style={styles.footerNavigation}>
                <View style={styles.navItem}>
                    <Icon name="home" size={30} color="#000" />
                    <Text style={styles.navText}>HOME</Text>
                </View>
                <View style={styles.navItem}>
                    <Icon name="savings" size={30} color="#000" />
                    <Text style={styles.navText}>SAVINGS</Text>
                </View>
                <View style={styles.navItem}>
                    <Icon name="attach-money" size={30} color="#000" />
                    <Text style={styles.navText}>LOANS</Text>
                </View>
                <View style={styles.navItem}>
                    <Icon name="account-circle" size={30} color="#000" />
                    <Text style={styles.navText}>ACCOUNT</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const ServiceItem = ({ iconName, label }) => (
    <TouchableOpacity style={styles.serviceItem}>
        <Icon name={iconName} size={30} color="#000" />
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
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    timeText: {
        color: '#fff',
        fontSize: 16,
    },
    menuIcon: {
        marginHorizontal: 10,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 60,
        height: 30,
        resizeMode: 'contain',
        marginHorizontal: 10,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginHorizontal: 10,
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
        backgroundColor: Constants.AppColor.white,
        margin:10,
        marginVertical: 40,
        borderRadius:15,
    },
    serviceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    serviceItem: {
        alignItems: 'center',
        width: '30%',
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#e0e0e0', // Use gradient or specific colors if needed
    },
    serviceText: {
        marginTop: 10,
        color: '#000',
        textAlign: 'center',
        fontSize: 12,
    },
    voomaPaySection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
    },
    sectionTitle: {
        padding: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
    footerNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
        backgroundColor: '#eaeaea',
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        marginTop: 5,
        fontSize: 12,
        color: '#000',
    },
});

export default Onboarding;