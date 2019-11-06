import React from "react";
import loginScreen from "./pages/Login";
import mainScreen from "./pages/Main";
import favoritosScreen from "./pages/Favoritos";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";


const AuthStack = createStackNavigator(
    {
        Login: {
            screen: loginScreen,
            navigationOptions: {
                header: null,
            }
        },
    }
);

const Drawer = createDrawerNavigator(
    {
        Main: {
            screen: mainScreen,

        },
        Favoritos: {
            screen: favoritosScreen,
        }
    }, {
    initialRouteName: "Main",
    drawerPosition: "right",
}
);

// const BottomTabNavigator = create

export default createAppContainer(createSwitchNavigator(
    {
        AuthStack,
        Drawer
    }, {
    initialRouteName: "AuthStack"
}
));