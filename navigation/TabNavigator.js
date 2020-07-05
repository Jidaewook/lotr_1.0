import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";

import {
    MainStackNavigator, 
    PostStackNavigator,
    SearchStackNavigator,
    ActivityStackNavigator,
    MypageStackNavigator

} from "./StackNavigator";

import Home from '../screen/Home';
import Post from '../screen/Post';
import Search from '../screen/Search';
import Activity from '../screen/Activity';
import Mypage from '../screen/Mypage';


const Tabs = createBottomTabNavigator();

const BottomTabnavigator = () => {
    return (
        <Tabs.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    let iconName = Platform.OS === "ios" ? "ios-" : "md-";
                    if(route.name === "Home"){
                        iconName += "home"
                    } else if (route.name === "Post") {
                        iconName += "add"
                    } else if (route.name === "Search") {
                        iconName += "search"
                    } else if (route.name === "Activity") {
                        iconName += "barcode"
                    } else if (route.name === "Mypage") {
                        iconName += "person"
                    }
                    return (
                        <Ionicons 
                            name={iconName}
                            color={focused ? "white" : "#0d4a6f"}
                            size={24}
                            
                        />
                    );
                }
            })}
            tabBarOptions={{
                showLabel: true,
                activeTintColor: "white",
                inactiveTintColor: "#0d4a6f",
                style: {
                    backgroundColor: "#819AD4",
                    borderTopColor: "#819AD4",
                
                }
            }}
        >
            <Tabs.Screen name="Home" component={MainStackNavigator} />
            <Tabs.Screen name="Post" component={PostStackNavigator} />
            <Tabs.Screen name="Search" component={SearchStackNavigator}/>
            <Tabs.Screen name="Activity" component={ActivityStackNavigator}/>
            <Tabs.Screen name="Mypage" component={MypageStackNavigator}/>
        </Tabs.Navigator>
    )
};  

export default BottomTabnavigator;