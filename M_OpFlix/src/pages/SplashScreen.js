// import React, { Component } from "react";
// import JwtDecode from "jwt-decode";
// import {
//     Text,
//     SafeAreaView,
//     StatusBar,
//     FlatList,
//     Image,
//     View,
//     StyleSheet,
//     TouchableOpacity,
//     AsyncStorage,
//     Dimensions
// } from "react-native";

// class SplashScreen extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             timer : null,   
//             redirectTo: null,
//             erro : null,
//         }
//     }

//     componentDidMount() {
//         this._redirecionar();

//     }




//     _redirecionar = async () => {
//         try {
//             let token = await AsyncStorage.getItem("@opflix:token");
//             let usuario = JwtDecode(token);
//             alert(usuario.nome);

//             if (token == null || usuario == null ) {
//                 let timer = setTimeout(this.setState({ redirectTo: "AuthStack" }),4500)
//                 clearTimeout(timer);
//             } else if (usuario.permissao == "ADMINISTRADOR") {

//                 let timer = setTimeout(this.setState({ redirectTo: "AdmDrawerNavigator" }),10500)
//                 clearTimeout(timer);

//             } else if (usuario.permissao == "CLIENTE") {

//                 let timer = setTimeout(this.setState({ redirectTo: "DrawerNavigator" }),4500)
//                 clearTimeout(timer);
//             }

//             this.props.navigation.navigate(this.state.redirectTo);


//         } catch (error) {
//             let timer = setTimeout(this.setState({ redirectTo: "AuthStack" }),4500)
//             clearTimeout(timer);
//         }
//     }

//     render() {
//             return (
//                 <SafeAreaView>
//                     <Text>SPLASHSCREEN</Text>
//                     <Text>SPLASHSCREEN</Text>
//                     <Text>SPLASHSCREEN</Text>
//                     <Text>SPLASHSCREEN</Text>
//                     <Text>SPLASHSCREEN</Text>
//                     <Text>SPLASHSCREEN</Text>
//                     <Text>SPLASHSCREEN</Text>
//                     <Text>SPLASHSCREEN</Text>
//                     <Text>SPLASHSCREEN</Text>
//                 </SafeAreaView>

//             )
//     }

// }



// export default SplashScreen;