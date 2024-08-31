import * as React from 'react';
import { Button, View,StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../../screens/HomeScreen/Home";
import Login from "../../screens/LoginScreen/Login";
import constants from "../constants/Constants";
import Onboarding from "../../screens/OnboardingScreen/Onboarding";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Phase0ne from "../../screens/Phases/Phase0ne";
import PhaseTwo from "../../screens/Phases/PhaseTwo";

const Stack = createNativeStackNavigator()

const Drawer = createDrawerNavigator();



export default function App() {
    const HomeStack = () => {
        return(
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                name="Home"
                component={DrawerNavigator}
                options={{
                    headerShown: false,
                }} />
                <Stack.Screen
                    name="PhaseOne"
                    component={Phase0ne}
                    options={{
                        headerShown: true,
                        title:"General Information",
                    }}
                />
                <Stack.Screen
                    name="PhaseTwo"
                    component={PhaseTwo}
                    options={{
                        headerShown: true,
                        title: "Concrete Faced Rock Filled Dam"
                    }}
                />

            </Stack.Navigator>
        )
    }

    function DrawerNavigator() {
        return <Drawer.Navigator initialRouteName="HomePage" screenOptions={{
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
            drawerLabelStyle: {
                color: constants.AppColor.backgroundColor,
                marginLeft: 10,
                fontSize: 15
            },
            headerTintColor: constants.AppColor.backgroundColor,
            drawerStyle: {
                backgroundColor: constants.AppColor.green,
                width: 250,

            }
        }}>
            <Drawer.Screen name="HomePage" component={Home} options={{
                title:"Home"
            }}/>
            <Drawer.Screen name="Notifications" component={Login}/>
            <Drawer.Screen name="Notification" component={Onboarding}/>
        </Drawer.Navigator>;
    }

    return (
        <NavigationContainer>
        <HomeStack/>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container:{
        // backgroundColor:constants.AppColor.backgroundColor
    },
    headerStyle:{
        backgroundColor: constants.AppColor.green,

    }
})