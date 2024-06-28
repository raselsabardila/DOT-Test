import React, { Fragment, useEffect, useState } from "react"
import { Image, SafeAreaView, Text, View } from "react-native"
import Tailwind from "../libs/tailwinds/Tailwind.lib"
import { useNavigation } from "@react-navigation/native"

let interval = null

const Splash = () => {
    const [counter, setCounter] = useState(0)
    const navigation = useNavigation()
    
    useEffect(() => {
        interval = setInterval(() => {
            setCounter((value) => value + 10)
        }, 500);
    }, [])

    useEffect(() => {
        if(counter >= 100) {
            clearInterval(interval)
            
            navigation.replace("Home")
        }
    }, [counter])

    return (
        <Fragment>
            <SafeAreaView
                style={ Tailwind`w-full min-h-full items-center justify-between bg-white p-6` }
            >
                <Image
                    source={ require("../assets/images/illustrations/illustration-splash.png") }
                    resizeMethod="scale"
                    resizeMode="contain"
                    style={ Tailwind`w-[450px] h-[450px] absolute -z-10 -top-20 -left-14` }
                />
                <View
                    style={ Tailwind`w-full h-1` }
                />
                <Image
                    source={ require("../assets/images/logo/logo-text.png") }
                    resizeMethod="scale"
                    resizeMode="contain"
                    style={ Tailwind`w-50 h-30 mt-5` }
                />
                <View
                    style={ Tailwind`w-full flex flex-row items-center justify-between` }
                >
                    <Text
                        style={ Tailwind`text-base text-black` }
                    >
                        Loading
                    </Text>
                    <Text
                        style={ Tailwind`text-base text-black` }
                    >
                        { counter }%
                    </Text>
                </View>
            </SafeAreaView>
        </Fragment>
    )
}

export default Splash