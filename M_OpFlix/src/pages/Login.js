import React, {Component} from "react";
import backgroundImage from "../assets/img/fundo-banner.png";

import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    AsyncStorage,
    ImageBackground,
    StatusBar
    } from "react-native";

import Axios from "axios";

class Login extends Component{
    constructor(){
        super();
        this.state = {
            // email : null,
            // senha : null,
            email : "erik@email.com",
            senha : "123456",

            naoFoiEncontrado : false,
        }
    }

    _fazerLogin = async() =>{
        // await fetch("http://192.168.4.16:5000/api/login",
        //     {
        //         method : "POST",
        //         headers : {
        //             "Content-type" : "application/json",
        //         },
        //         body : JSON.stringify({
        //             email : this.state.email,
        //             senha : this.state.senha,
        //     })
        //     .then(resposta => resposta.json())
        //     .then(data => this._redirecionarParaMain(data.token))
        //     .catch(error => console.warn("catch do fetch " + error))
        // })

        await Axios.post("http://192.168.4.16:5000/api/login",{
            email : this.state.email,
            senha : this.state.senha,
        })
        .then(response => {
            if (response.status === 200){
                let token = response.data.token;
                this._redirecionarParaMain(token);
            }else if (response.status == 404){
                this.setState({naoFoiEncontrado : true})
            }
        })
        .catch(error => {
            console.warn("erro : " + error)
            if (error.status == 404){
                this.setState({naoFoiEncontrado : true})
            }
        })

    }

    _redirecionarParaMain = async(token) =>{
        if (token !== null){
            try {
                await AsyncStorage.setItem("@opflix:token",token)
                this.props.navigation.navigate("Main");
            } catch (error) {
                console.warn("caiu no catch")
            }
        }
    }

    render(){ 
        return(
            <SafeAreaView>
                {/* <StatusBar style={styles.container} backgroundColor="#330711" barStyle="light-content"/> */}
                <StatusBar hidden={true}/>
                <ImageBackground source={require("../assets/img/fundo-banner.png")} style={{width : "100%", height : "100%"}}>
                    <View  style={styles.container}>
                        <View style={styles.content}>
                            <Text style={styles.titulo}>OpFlix</Text>
                            <View>
                                <TextInput 
                                keyboardType="email-address"
                                autoCapitalize="none" 
                                autoCompleteType="email" 
                                selectionColor="#fff"
                                style={styles.input} 
                                placeholder="Email" 
                                placeholderTextColor="#FFF"  
                                maxLength={140}
                                onChangeText={email => this.setState({email})} 
                                />    
                                <TextInput 
                                style={styles.input}  
                                placeholder="Senha" 
                                autoCapitalize="none" 
                                secureTextEntry={true}
                                placeholderTextColor="#FFF" 
                                maxLength={100}
                                onChangeText={senha => this.setState({senha}) } 
                                />    
                            </View>
                            <TouchableOpacity onPress={this._fazerLogin} style={styles.submit}>
                                <Text styles={styles.textoSubmit}>Entrar</Text>
                            </TouchableOpacity>

                            {this.state.naoFoiEncontrado === true ?
                                <Text>Email ou senha incorretos</Text>
                                :
                                null
                            }
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        alignItems : "center",
        justifyContent : "center",
        height : "100%",
    },
    content : {
        justifyContent : "space-around",
        alignItems : "center",
        height : 300,
    },
    titulo : {
        color : "#fff",
        fontSize : 100,
        textAlign : "center",
        marginTop : -50,
        // fontWeight : "bold"
    },
    submit : {
        backgroundColor : "#fff",
        width : 300,
        paddingVertical : 10,
        justifyContent : "center",
        alignItems : "center",
        marginTop : 20,
    },
    textoSubmit : {
        color : "#a60313",
        fontSize : 500,
    },
    input : {
        color : "#fff",
        borderBottomWidth : 2,   
        borderBottomColor : "#F2EB12",
        width : 300,
        fontSize : 15,
    }
})
export default Login;