import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {MainStackNavigator, ContactStackNavigator} from "./StackNavigator";

const Tabs = createBottomTabNavigator();

const BottomTabnavigator = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={MainStackNavigator} />
            <Tabs.Screen name="Contact" component={ContactStackNavigator} />
        </Tabs.Navigator>
    )
};  

export default BottomTabnavigator;