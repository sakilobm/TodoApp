import React from "react";
import * as Font from "expo-font";
import { AppLoading } from 'expo-app-loading';
// import { Lobster_Regular } from "@expo-google-fonts/lobster";
import { useFonts } from "@use-expo/font";

const setFont = () => {

    const [fontsLoaded] = useFonts({
        "Lobster-Regular": require("../assets/Lobster-Regular.ttf")
    })
    if (fontsLoaded) {
        return <AppLoading />
    } else {
        return null
    }
}
export default setFont;