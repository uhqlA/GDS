import * as React from 'react';
import { Button, View,StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../../screens/HomeScreen/Home";
import Login from "../../screens/LoginScreen/Login";
import constants from "../constants/Constants";
import Onboarding from "../../screens/OnboardingScreen/Onboarding";


const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Notifications" component={Login} />
                <Drawer.Screen name="Notification" component={Onboarding} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:constants.AppColor.backgroundColor
    }
})