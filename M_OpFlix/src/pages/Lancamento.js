import React, { Component } from "react";
import { 
    Text,
    SafeAreaView,
    StatusBar,
    FlatList,
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
                    this.setState({lancamento : data})
                })
                .catch(error => alert(error))
            }
        } catch (error) {
            
        }
    }

    render(){
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
                    {/* <TouchableOpacity onPress={this.props.navigation.toggleDrawer}>
                        <Image source={require("../assets/img/menu-icon.png")} style={styles.menuIcon} />
                    </TouchableOpacity> */}
                </View>
                {/* FIM DO NAV */}

                <View style={styles.flexRow}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Main")}>
                        <Image style={styles.seta} source={require("../assets/img/arrow.png")}/>
                    </TouchableOpacity>
                    <Text style={styles.tituloPrincipal}>{this.state.lancamento.titulo}</Text>
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