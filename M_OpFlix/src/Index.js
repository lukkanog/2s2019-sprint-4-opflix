import React from "react";
import loginScreen from "./pages/Login";
import mainScreen from "./pages/Main";
import favoritosScreen from "./pages/Favoritos";
import lancamentoScreen from "./pages/Lancamento";
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
const DrawerNavigator = createDrawerNavigator(
    {
        Main: {
            screen: mainScreen,
        },
        
    }, {
    initialRouteName: "Main",
    drawerPosition: "right",
}
);

// let Lancamento = lancamentoScreen

// PARA USUARIOS
const BottomTabNavigator = createBottomTabNavigator(
    {
        Main: {
            screen: mainScreen,

        },
        Favoritos: {
            screen: favoritosScreen,
        } 
    },{
        initialRouteName : "Main",
    }
)


export default createAppContainer(createSwitchNavigator(
    {
        AuthStack,
        DrawerNavigator,
        BottomTabNavigator,
        lancamentoScreen
    }, {
    initialRouteName: "AuthStack"
}
));