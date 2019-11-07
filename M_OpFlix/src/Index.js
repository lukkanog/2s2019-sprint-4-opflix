import React from "react";
import loginScreen from "./pages/Login";
import mainScreen from "./pages/Main";
import favoritosScreen from "./pages/Favoritos";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";


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


// PARA ADMS
const Drawer = createDrawerNavigator(
    {
        Main: {
            screen: mainScreen,

        },
        
    }, {
    initialRouteName: "Main",
    drawerPosition: "right",
}
);



// PARA USUARIOS
// const BottomTabNavigator = createBottomTabNavigator(
//     {
//         Main: {
//             screen: mainScreen,

//         },
//         Favoritos: {
//             screen: favoritosScreen,
//         } 
//     }
// )

export default createAppContainer(createSwitchNavigator(
    {
        AuthStack,
        Drawer,
        // BottomTabNavigator
    }, {
    initialRouteName: "AuthStack"
}
));