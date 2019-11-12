import React, { Component } from "react";
import { 
    Text,
    SafeAreaView,
    StatusBar,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage
} from "react-native";

class Lancamento extends Component{
    constructor(){
        super();
        this.state = {
            lancamento : {}
        }
    }

    componentDidMount(){
        let id = this.props.navigation.getParam("idLancamento");
        this._carregarInformacoes(id);
    }

    _carregarInformacoes = async(idLancamento) =>{
        try {
            let token = await AsyncStorage.getItem("@opflix:token");
            if (token !== null){
                fetch("http://192.168.4.16:5000/api/lancamentos/" + idLancamento,{
                    headers : {
                        "Authorization" : "Bearer " + token,
                    }
                })
                .then(resposta => resposta.json())
                .then(data => {
                    this.setState({lancamento : data});
                    console.warn(this.state.lancamento)
                })
                .catch(error => alert(error))
            }
        } catch (error) {
            console.warn(error)
        }
    }

    _formatarData = (element) => {
        let data = element.dataLancamento.split("T")[0];
        let ano = data.split("-")[0];
        let mes = data.split("-")[1];
        let dia = data.split("-")[2];

        return (dia + "/" + mes + "/" + ano);
    }

    render(){
        let teste = this.state.lancamento
        return(
            <SafeAreaView>
                {/* <Nav/> */}
                <StatusBar 
                    animated={true}
                    backgroundColor="#A60313"
                    barStyle="light-content"
                />
 
                <View style={styles.navContainer}>
                    <View style={styles.logo}>
                        <Image source={require("../assets/img/icon-logo.png")} style={{ width: 50, height: 50 }} />
                        <Text style={styles.textoLogo}>OpFlix</Text>
                    </View>
                </View>
                {/* FIM DO NAV */}

                <View style={styles.flexRow}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
                        <Image style={styles.seta} source={require("../assets/img/arrow.png")}/>
                    </TouchableOpacity>
                    <Text style={styles.tituloPrincipal}>{this.state.lancamento.titulo}</Text>
                </View>

                <View>
                    <Image source={require("../assets/img/jureg-teste.png")} style={{width : 50, height : 60}}/>
                    
                    {/* <Text>Plataforma: </Text><Text>{this.state.lancamento.idPlataformaNavigation.nome}</Text>
                    <Text>Categoria: </Text><Text>{this.state.lancamento.idCategoriaNavigation.nome}</Text>
                    <Text>Tipo: </Text><Text>{this.state.lancamento.idTipoLancamentoNavigation.nome}</Text> */}
                    <Text>Duração: </Text><Text>{this.state.lancamento.duracao}</Text>
                    <Text>Sinopse: </Text><Text>{this.state.lancamento.sinopse}</Text>
                    <Text>{this.state.lancamento.dataLancamento}</Text>
                    <Text>{this.state.dataLancamento}</Text>
                    {/* <Text>{this._formatarData(teste)}</Text> */}
                </View>
            </SafeAreaView>
        )
    } 
}

const styles = StyleSheet.create({
    navContainer: {
        backgroundColor: "#A60313",
        flexDirection: "row",
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "space-between",
        height: 70,
    },
    logo: {
        flexDirection: "row",
        alignItems: "center",
    },
    textoLogo: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold"
    },
    menuIcon : {
        width :50,
        height : 35,
        zIndex : 1000,
    },

    tituloPrincipal: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 22,
        paddingVertical: 14,
        width : "90%",
      
    },
    seta :{
        height : 30,
        width : 30,
        transform : [{rotate : "90deg"}],
        tintColor : "#999999",
    },
    data : {
        color : "#11A7F2",
        fontSize : 20,
        fontWeight : "bold",
    },
    flexRow : {
        paddingVertical : 10,
        alignSelf : "center",
        width : "90%",
        flexDirection : "row",
        alignItems : "center",
        borderBottomWidth : 3,
        borderColor : "#A60313",
        marginBottom : 5,
    },
    textoBold : {
        fontWeight : "bold",
    }
})
export default Lancamento