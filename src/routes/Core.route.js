import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React, { Fragment } from "react"
import Splash from "../screens/Splash.screen"
import Home from "../screens/Home.screen"
import Detail from "../screens/Detail.screen"

const Stack = createNativeStackNavigator()

const Core = () => {
    return (
        <Fragment>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={ "Splash" }
                    screenOptions={{ 
                        headerShown: false,
                    }}
                >
                    <Stack.Screen
                        name={ "Splash" }
                        component={ Splash }
                    />
                    <Stack.Screen
                        name={ "Home" }
                        component={ Home }
                    />
                    <Stack.Screen
                        name={ "Detail" }
                        component={ Detail }
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Fragment>
    )
}

export default Core