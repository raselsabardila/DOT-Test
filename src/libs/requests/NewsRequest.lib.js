import { ToastAndroid } from "react-native"
import Axios from "axios"

const GetNews = async () => {
    try {
        const request = await Axios.get(
            "https://newsapi.org/v2/top-headlines?country=id&apiKey=ec15900e4863451688f4a57ebac70e9b"
        )

        return request.data.articles
    } catch (error) {
        console.log(error)

        ToastAndroid.show("Failed get data news.", 1500)
        
        return []
    }
}

export {
    GetNews
}