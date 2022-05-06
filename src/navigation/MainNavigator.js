import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import mainScreen from "../screens/mainScreen"
import memberScreen from "../screens/memberScreen"
import listIndex from "../components/listIndex"
import memdetailScreen from "../screens/memberDetail"
import Colors from "../constant/color"

const Stack = createStackNavigator();

const defaultStackNavOptions ={
    headerStyle: { backgroundColor: Colors.primaryColor },
    headerTintColor: "white",
};

function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main" screenOptions={defaultStackNavOptions} >
                <Stack.Screen name="Main" component={mainScreen} options={{title:"Mini App"}}></Stack.Screen>
                <Stack.Screen name="Member" component={memberScreen} options={{title:"Mini App"}}></Stack.Screen>
                <Stack.Screen name="Detail" component={listIndex} options={{title:"Mini App"}}></Stack.Screen>
                <Stack.Screen name="Personnal" component={memdetailScreen} options={{title:"Mini App"}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigator;