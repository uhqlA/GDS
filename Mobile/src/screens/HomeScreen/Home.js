import {View, Text, StyleSheet, TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'
import Constants from '../../components/constants/Constants'
import Fontisto from '@expo/vector-icons/Fontisto'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.titleHome}>Infrastructure Data Collection Tool</Text>
        <View style={styles.cardHome}>
            <View style={styles.iconsHome}>
                <View style={styles.iconInfo}>
                    <TouchableOpacity>
                        <FontAwesome name="map-marker" size={30} color="green"  style={styles.icon} />
                        <Text style={styles.textHome}>General information</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.iconInfo}>
                    <TouchableOpacity>
                        <Entypo name="water" size={30} color="blue"  style={styles.icon} />
                        <Text style={styles.textHome}>Phase One</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.iconInfo}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="hydro-power" size={30} color="black"  style={styles.icon} />
                        <Text style={styles.textHome}>Phase Two</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.iconsHomeDown}>
                <View style={styles.iconInfo}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="pipe-valve" size={30} color="black"  style={styles.icon} />
                        <Text style={styles.textHome}>Phase Four</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.iconInfo}>
                    <TouchableOpacity>
                        <Fontisto name="world-o" size={30} color="black" style={styles.icon} />
                        <Text style={styles.textHome}>Phase One</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.iconInfo}>
                    <TouchableOpacity>
                        <Fontisto name="world-o" size={30} color="black" style={styles.icon} />
                        <Text style={styles.textHome}>Phase Two</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>


    </ScrollView>
  )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Constants.AppColor.grey,
    },
    titleHome: {
        textAlign: "center",
        fontSize:25,
        fontWeight: "bold",
        color: Constants.AppColor.backgroundColor,
        paddingTop:40,
        paddingBottom:40,
    },
    cardHome:{
        backgroundColor:Constants.AppColor.white,
        padding:10,
        margin:20,
        marginVertical: 40,
        borderRadius:15,

    },
    iconsHome:{
        justifyContent:'space-between',
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:10,

    },
    iconInfo:{
      borderWidth:0.5,
        borderColor:Constants.AppColor.black,
        height:80,
        width:90,
        backgroundColor:"aliceblue",
       padding:4,
        borderRadius:10
    },
    iconsHomeDown:{
        justifyContent:'space-between',
        flexDirection:'row',
        paddingVertical:15,
        paddingHorizontal:10,
    },
    icon:{

        textAlign: "center"
    },
    textHome:{
        color:Constants.AppColor.backgroundColor,
        fontSize:18,
        paddingVertical:2,
        fontWeight:400,
        textAlign:"center"
    },


})