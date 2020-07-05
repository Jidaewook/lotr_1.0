import React from 'react'

import {createDrawerNavigator} from "@react-navigation/drawer";
import {
    PostStackNavigator,
    SearchStackNavigator,
    ActivityStackNavigator,
    MypageStackNavigator

} from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigatior = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Post" component={PostStackNavigator} />
            <Drawer.Screen name="Search" component={SearchStackNavigator} />
            <Drawer.Screen name="Activity" component={ActivityStackNavigator} />
            <Drawer.Screen name="Mypage" component={MypageStackNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigatior;