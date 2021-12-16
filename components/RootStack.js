import React, { useState } from "react";

import HomeList from './HomeList'
//async storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from "expo-app-loading"
import { Container } from "../styles/appStyles";
import {
    TopBarTitle,
    TopBar,
    Profile
} from "../styles/appStyles";
import { MaterialIcons } from "@expo/vector-icons";
import Login from "../screens/LoginScreen";

export default function RootStack({ navigation }) {

    // initial todos
    const [ready, setReady] = useState(false)
    const initialTodos = []

    const [todos, setTodos] = useState(initialTodos)

    const LoadTodos = () => {
        AsyncStorage.getItem("storedTodos").then(data => {
            if (data !== null) {
                setTodos(JSON.parse(data))
            }
        }).catch(((error) => console.log(error)))
    }

    if (!ready) {
        return (
            <AppLoading
                startAsync={LoadTodos}
                onFinish={() => setReady(true)}
                onError={console.warn}
            />
        )
    }

    return (
        <>
            <Container>
                <TopBar>
                    <TopBarTitle>TodoApp</TopBarTitle>

                    <Profile
                        onPress={() => navigation.navigate(Login)}
                    >
                        <MaterialIcons name="account-circle" size={44} color="#332424" />
                    </Profile>
                </TopBar>
                <HomeList todos={todos} setTodos={setTodos} />
            </Container>

        </>
    );
}