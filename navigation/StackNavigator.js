import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";

import Home from "../screen/Home";
import Contact from "../screen/Contact";
import About from "../screen/About";
import Icon from "react-native-vector-icons/Ionicons";


const stack = createStackNavigator();

const screenOptionStyles = {
    headerStyle: {
        backgroundColor: "#819AD4"
    },
    headerTintColor: "white",
    headerBackTitle: "Back"
};

const MainStackNavigator = ({navigation}) => {
    return (
        <stack.Navigator 
            screenOptions={screenOptionStyles}
        >
            <stack.Screen 
                name="Home"
                component={Home}
                options={{
                    title: 'Overview',
                    headerLeft: () => (
                        <Icon.Button 
                            name="ios-menu" 
                            size={25} 
                            backgroundColor="#819AD4" 
                            onPress={() => navigation.openDrawer()}
                        />
                    )
                }}
            />
            <stack.Screen 
                name="About"
                component={About}
                options={{
                    title: 'About',
                    headerLeft: () => (
                        <Icon.Button 
                            name="ios-menu" 
                            size={25} 
                            backgroundColor="#819AD4" 
                            onPress={() => navigation.openDrawer()}
                        />
                    )
                }}
            />
        </stack.Navigator>
    )
};

const ContactStackNavigator = ({navigation}) => {
    return (
        <stack.Navigator
            screenOptions={screenOptionStyles}
        >
            <stack.Screen 
                name="Contact"
                component={Contact}
                options={{
                    title: 'Contact',
                    headerLeft: () => (
                        <Icon.Button 
                            name="ios-menu" 
                            size={25} 
                            backgroundColor="#96c0eb" 
                            onPress={() => navigation.openDrawer()}
                        />
                    )
                }}
            />

        </stack.Navigator>

    )

}

export {MainStackNavigator, ContactStackNavigator};