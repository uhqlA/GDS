import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import Constants from '../../components/constants/Constants'
import {Icon} from '@rneui/themed';


const Home = ({navigation}) => {
    const onPressingG=()=>navigation.navigate('PhaseOne')
    const onPressingPhaseOne=()=>navigation.navigate('PhaseTwo')
    const PhaseCards = () => {
        const CircularCard = ({iconName, titleHeader, iconType, color,backgroundColor="#fef9e7",onPress=null}) => (
            <View style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start'
            }}>
                <TouchableOpacity style={[styles.iconInfo,{backgroundColor}]} onPress={onPress}>
                    <Icon name={iconName} type={iconType} size={20} color={color} style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.textHome}>{titleHeader}</Text>
            </View>
        )
        return (
            <View style={styles.phaseContainer}>
                <View style={styles.iconsHome}>
                    <CircularCard iconName="map-marker" size={20} color="green" iconType="font-awesome" titleHeader="General Information" onPress={onPressingG}/>
                    <CircularCard iconName="water" size={20} color="#000" iconType="entypo" titleHeader="Phase One" backgroundColor="#d5d8dc" onPress={onPressingPhaseOne}/>
                    <CircularCard iconName="hydro-power" size={20} color="#000" iconType="material-community" titleHeader="Phase Two" backgroundColor="#fbeee6"/>
                </View>
                <View style={styles.iconsHomeDown}>
                    <CircularCard iconName="pipe-valve" size={20} color="#000" iconType="material-community" titleHeader="Phase Three" backgroundColor="#e1fdce"/>
                    <CircularCard iconName="world-o" size={20} color="#000" iconType="fontisto" titleHeader="Phase Four" backgroundColor="#f2f4f4"/>
                    <CircularCard iconName="world-o" size={20} color="#000" iconType="fontisto" titleHeader="Phase Five"/>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerHome}>
                <Text style={styles.titleHome}>Infrastructure Data Collection Tool</Text>
            </View>
            <View>
            </View>
            <PhaseCards/>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerHome: {
        backgroundColor: Constants.AppColor.green,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flex: 0.25,
    },
    titleHome: {
        padding: 20,
        fontSize: 16,
        fontWeight: "bold",
        color: Constants.AppColor.white,
        paddingTop: 20,
        paddingBottom: 40,
    },
    cardHome: {
        backgroundColor: Constants.AppColor.white,
        padding: 1,
        margin: 20,
        marginVertical: 40,
        borderRadius: 15,

    },
    iconsHome: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10

    },
    iconInfo: {
        width: 50, // Width of the circle
        height: 50, // Height of the circle
        borderRadius: 50, // Half of width and height to make it circular
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
    },
    iconsHomeDown: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    icon: {
        textAlign: "center"
    },
    textHome: {
        color: Constants.AppColor.backgroundColor,
        textAlign: "center"
    },
    phaseContainer: {
        position: 'absolute',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.15,
        shadowRadius: 2,
        elevation: 2,
        minHeight: 100,
        top: 120,
        margin: 10,
        backgroundColor: Constants.AppColor.white,
        left: 10,
        right: 10,
        padding: 5,

    }


})