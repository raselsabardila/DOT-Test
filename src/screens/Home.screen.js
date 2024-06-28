import React, { createContext, Fragment, useEffect, useState } from "react"
import { ActivityIndicator, FlatList, SafeAreaView, ScrollView, Text, TouchableHighlight, View } from "react-native"
import Tailwind from "../libs/tailwinds/Tailwind.lib"
import Spacer from "../components/atoms/Spacer.atom"
import NewsItem from "../components/organisms/NewsItem.organism"
import { GetNews } from "../libs/requests/NewsRequest.lib"
import { HeartIcon } from "react-native-heroicons/outline"
import { useNavigation } from "@react-navigation/native"

const FavoriteContext = createContext()
const { Provider } = FavoriteContext

const Home = () => {
    const [news, setNews] = useState([])
    const [favorites, setFavorites] = useState([])
    const navigation = useNavigation()

    useEffect(() => {
        const init = async () => {
            const responseGetNews = await GetNews()

            setNews([...responseGetNews])
        }

        init()
    }, [])

    console.log(favorites)

    return (
        <Fragment>
            <Provider
                value={{ favorites, setFavorites }}
            >
                <SafeAreaView
                    style={ Tailwind`w-full min-h-full bg-white flex flex-col` }
                >
                    <ScrollView>
                        <View
                            style={ Tailwind`w-full px-6` }
                        >
                            <Text
                                style={ Tailwind`font-semibold text-lg text-black mt-6` }
                            >
                                Recomendation News
                            </Text>
                            <FlatList
                                data={ news }
                                keyExtractor={ (item, index) => index }
                                scrollEnabled={ false }
                                removeClippedSubviews={true}
                                maxToRenderPerBatch={4}
                                windowSize={4}
                                initialNumToRender={4}
                                style={ Tailwind`w-full` }
                                ListHeaderComponent={ () => {
                                    return (
                                        <Spacer
                                            width="w-full"
                                            height="h-3"
                                        />
                                    )
                                } }
                                ListEmptyComponent={() => {
                                    return (
                                        <View
                                            style={ Tailwind`w-full flex flex-col items-center pt-10` }
                                        >
                                            <ActivityIndicator
                                                size={ "large" }
                                                color={ "#101010" }
                                            />
                                            <Text
                                                style={ Tailwind`font-semibold text-base text-black mt-3` }
                                            >
                                                Data not available
                                            </Text>
                                        </View>
                                    )
                                }}
                                ListFooterComponent={ () => {
                                    return (
                                        <Spacer
                                            width="w-full"
                                            height="h-30"
                                        />
                                    )
                                } }
                                ItemSeparatorComponent={ () => {
                                    return (
                                        <Spacer
                                            width="w-full"
                                            height="h-2"
                                        />
                                    )
                                } }
                                renderItem={ ({ item, index }) => {
                                    return (
                                        <NewsItem
                                            item={{ ...item, id: `news-${ index }` }}
                                            context={ FavoriteContext }
                                        />
                                    )
                                } }
                            />
                        </View>
                    </ScrollView>
                    <View
                        style={ Tailwind`bottom-0 absolute z-10 w-full px-3 pb-3 bg-transparent` }
                    >
                        <View
                            style={ Tailwind`w-full rounded-2xl border-2 border-black bg-blue-200 p-3 flex flex-row items-center` }
                        >
                            <View
                                style={ Tailwind`w-10 h-10 rounded-full bg-white border-2 border-black flex flex-col items-center justify-center` }
                            >
                                <HeartIcon
                                    size={ 24 }
                                    style={ Tailwind`text-red-500 mt-px` }
                                />
                            </View>
                            <View
                                style={ Tailwind`flex-1 ml-3 flex flex-row items-center justify-between` }
                            >
                                <View>
                                    <Text
                                        style={ Tailwind`font-medium text-base text-black` }
                                    >
                                        Favorite News
                                    </Text>
                                    <Text
                                        style={ Tailwind`text-xs text-black -mt-1` }
                                    >
                                        { favorites.length } item
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </Provider>
        </Fragment>
    )
}

export default Home