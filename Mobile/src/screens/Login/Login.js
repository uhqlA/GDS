import react from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import constants from "../../components/constants/Constants";


const Login = () => {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../../assets/logo.png')} />
            </View>
            <Text>Login</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    imageContainer: {
        alignSelf: 'center',
        paddingVertical:70,
    },
    image:{
        height: 70,
        width: 70,
    }
})
export default Login;