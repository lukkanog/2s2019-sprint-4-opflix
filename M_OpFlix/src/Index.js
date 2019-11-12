import React from "react";
import loginScreen from "./pages/Login";
import mainScreen from "./pages/Main";
import favoritosScreen from "./pages/Favoritos";
import lancamentoScreen from "./pages/Lancamento";
import cadastroScreen from "./pages/Cadastro"
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import iconeHome from "./components/IconeHome";
import iconeFavoritos from "./components/IconeFavoritos";
import customDrawer from "./components/CustomDrawer";

const AuthStack = createStackNavigator(
    {
        Login: {
            screen: loginScreen,
            navigationOptions: {
                header: null,
            }
        },
        Cadastro : {
            screen : cadastroScreen,
        }
    },{
        initialRouteName : "Login"
    }
);


// PARA ADMS
const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: mainScreen,
            navigationOptions: {
                drawerLabel: "Home",
                drawerIcon : iconeHome,
            }

        },
        Favoritos: {
            screen: favoritosScreen,
            navigationOptions: {
                drawerLabel: "Meus favoritos",
                drawerIcon : iconeFavoritos,
            }
        }

    }, {
        initialRouteName: "Home",
        drawerPosition: "right",
        drawerBackgroundColor: "#a60313",
        drawerType: "slide",
        drawerLockMode: "unlocked",
        contentOptions: {
            activeTintColor: "#F2EB12",
            inactiveTintColor: "#FFF",
            activeBackgroundColor: "#87020F",
        },
        contentComponent : customDrawer,
    }
);

// const LancamentosNavigator = createStackNavigator(
//     {
//         Home: {
//             screen : mainScreen,
//             navigationOptions : {
//                 header : null,
//             }

//         },
//         Lancamento : {
//             screen : lancamentoScreen,
//             navigationOptions : {
//                 title : "OpFlix",
//                 headerStyle: {
//                     backgroundColor: '#a60313',
//                   },
//                   headerTintColor: '#fff',
//                   headerTitleStyle: {
//                     fontWeight: 'bold',
//                   },
//             }
//         }   
//     },{
//         initialRouteName : "Home",

//     }
// )


export default createAppContainer(createSwitchNavigator(
    {
        AuthStack,
        DrawerNavigator,
        lancamentoScreen
    }, {
    initialRouteName: "AuthStack"
}
));