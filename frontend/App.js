import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Login from "./screens/login.screen";
import CreateAccount from "./screens/create_account.screen";
import Analytics from "./screens/analytics.screen";
import TabNavigation from "./screens/tabnavigation";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Profile from "./screens/profile.screen";

const Stack = createNativeStackNavigator();

const headerConfig = (bg, show = true) => {
    return {
        headerStyle: {
            backgroundColor: bg,
        },
        headerTintColor: "#4C51C6",
        headerTitleStyle: {
            fontWeight: "bold",
        },
        headerShown: show,
    };
};

export default function App() {
    return (
        <View style={{
            marginTop: 30,
            flex: 1,
        }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="SIGN IN">
                    <Stack.Screen
                        options={headerConfig("#dfdfdf", false)}
                        name="SIGN IN"
                        component={Login}
                    />
                    <Stack.Screen
                        options={headerConfig("#dfdfdf", false)}
                        name="CREATE ACCOUNT"
                        component={CreateAccount}
                    />
                    <Stack.Screen
                        options={headerConfig("#dfdfdf", false)}
                        name="HOME"
                        component={TabNavigation}
                    />
                    <Stack.Screen
                        options={headerConfig("#dfdfdf", false)}
                        name="UPDATE PROFILES"
                        component={Profile}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}
