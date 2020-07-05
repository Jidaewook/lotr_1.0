import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";

import Home from "../screen/Home";
import Post from "../screen/Post";
import Search from "../screen/Search";
import Activity from "../screen/Activity";
import Mypage from "../screen/Mypage";
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
            
        </stack.Navigator>
    )
};

const PostStackNavigator = ({navigation}) => {
    return (
        <stack.Navigator
            screenOptions={screenOptionStyles}
        >
            <stack.Screen 
                name="Post"
                component={Post}
                options={{
                    title: 'Post',
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

}

const SearchStackNavigator = ({navigation}) => {
    return (
        <stack.Navigator
            screenOptions={screenOptionStyles}
        >
            <stack.Screen 
                name="Search"
                component={Search}
                options={{
                    title: 'Search',
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

}

const ActivityStackNavigator = ({navigation}) => {
    return (
        <stack.Navigator
            screenOptions={screenOptionStyles}
        >
            <stack.Screen 
                name="Activity"
                component={Activity}
                options={{
                    title: 'Activity',
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

}

const MypageStackNavigator = ({navigation}) => {
    return (
        <stack.Navigator
            screenOptions={screenOptionStyles}
        >
            <stack.Screen 
                name="Mypage"
                component={Mypage}
                options={{
                    title: 'Mypage',
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

}

export {MainStackNavigator, PostStackNavigator, SearchStackNavigator, ActivityStackNavigator, MypageStackNavigator};