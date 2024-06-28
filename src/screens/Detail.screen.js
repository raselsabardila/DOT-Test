import React, { Fragment } from "react"
import { SafeAreaView } from "react-native"
import Tailwind from "../libs/tailwinds/Tailwind.lib"
import { useRoute } from "@react-navigation/native"
import { WebView } from 'react-native-webview';

const Detail = () => {
    const route = useRoute()

    return (
        <Fragment>
            <SafeAreaView
                style={ Tailwind`w-full min-h-full` }
            >
                <WebView
                    source={{ uri: route.params.item.url }}
                />
            </SafeAreaView>
        </Fragment>
    )
}

export default Detail