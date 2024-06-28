import React, { Fragment } from "react"
import { View } from "react-native"
import Tailwind from "../../libs/tailwinds/Tailwind.lib"

const Spacer = ({ width = "w-0", height = "h-0" }) => {
    return (
        <Fragment>
            <View
                style={ Tailwind`${ width } ${ height }` }
            />
        </Fragment>
    )
}

export default Spacer