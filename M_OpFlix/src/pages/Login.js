import React, {Component} from "react";
import backgroundImage from "../assets/img/fundo-banner.png";

import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Stylesheet,
    AsyncStorage
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
            }else if (response.status === 404){
                this.setState({naoFoiEncontrado : true})
            }
        })
        .catch(error => console.warn("erro : " + error))

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
                <SafeAreaView>

                    <Text h1>OpFlix</Text>
                    <View>
                        <TextInput placeholder="Email" onChangeText={email => this.setState({email})}/>    
                        <TextInput placeholder="Senha" onChangeText={email => this.setState({email})}/>    
                    </View>
                    <TouchableOpacity onPress={this._fazerLogin}>
                        <Text>Entrar</Text>
                    </TouchableOpacity>

                    {this.state.naoFoiEncontrado === true ?
                        <Text>Email ou senha incorretos</Text>
                    :
                        null
                    }

                </SafeAreaView>
            </SafeAreaView>
        )
    }
}
export default Login;