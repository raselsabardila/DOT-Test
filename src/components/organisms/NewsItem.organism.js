import React, { Fragment, useContext } from "react"
import Tailwind from "../../libs/tailwinds/Tailwind.lib"
import { ImageBackground, Text, TouchableHighlight, View } from "react-native"
import { HeartIcon as HeartOutlineIcon, PhotoIcon } from "react-native-heroicons/outline"
import { HeartIcon as HeartSolidIcon } from "react-native-heroicons/solid"
import { useNavigation } from "@react-navigation/native"

const NewsItem = ({ item, context }) => {
    const navigation = useNavigation()
    const FavoriteContext = useContext(context)

    return (
        <Fragment>
            <TouchableHighlight
                underlayColor={ "#10101010" }
                style={ Tailwind`w-full rounded-3xl` }
                onPress={ () => navigation.push("Detail", { item }) }
            >
                <View
                    style={ Tailwind`w-full bg-white p-4 rounded-3xl border-2 border-black` }
                >
                    <View
                        style={ Tailwind`w-full flex flex-row items-center` }
                    >
                        <View
                            style={ Tailwind`flex-1 flex flex-row items-center` }
                        >
                            <View
                                style={ Tailwind`w-9 h-9 border-2 border-black rounded-full bg-blue-200 flex flex-row items-center justify-center` }
                            >
                                <Text
                                    style={ Tailwind`font-semibold text-xs text-black` }
                                >
                                    { item.author.split("")[0].toUpperCase() }
                                </Text>
                            </View>
                            <Text
                                style={ Tailwind`font-semibold text-base text-black ml-3` }
                            >
                                { item.author }
                            </Text>
                        </View>
                        <TouchableHighlight
                            underlayColor={ "#10101010" }
                            style={ Tailwind`rounded-full p-2` }
                            onPress={ () => {
                                if(FavoriteContext.favorites.includes(item.id)) {
                                    FavoriteContext.setFavorites([...FavoriteContext.favorites.filter(element => element !== item.id)])
                                } else {
                                    FavoriteContext.setFavorites([...FavoriteContext.favorites, item.id])
                                }
                            } }
                        >
                            {
                                !FavoriteContext.favorites.includes(item.id) ?
                                    <HeartOutlineIcon
                                        size={ 26 }
                                        style={ Tailwind`text-red-500` }
                                    /> : 
                                    <HeartSolidIcon
                                        size={ 26 }
                                        style={ Tailwind`text-red-500` }
                                    />
                            }
                            
                        </TouchableHighlight>
                    </View>
                    <View
                        style={ Tailwind`w-full h-35 rounded-lg overflow-hidden mt-3 border-2 border-black bg-gray-200 flex flex-col items-center justify-center` }
                    >
                        <PhotoIcon
                            size={ 60 }
                            style={ Tailwind`text-gray-600` }
                        />
                    </View>
                    <Text
                        style={ Tailwind`text-sm text-black mt-3` }
                    >
                        { item.publishedAt.split("T")[0] }
                    </Text>
                    <Text
                        style={ Tailwind`font-semibold text-base text-black mt-1` }
                        numberOfLines={ 2 }
                    >
                        { item.title }
                    </Text>
                </View>
            </TouchableHighlight>
        </Fragment>
    )
}

export default NewsItem