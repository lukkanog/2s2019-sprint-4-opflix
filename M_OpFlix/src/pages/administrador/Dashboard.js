import React, { Component } from "react";
import JwtDecode from "jwt-decode";
import {
    Text,
    SafeAreaView,
    StatusBar,
    FlatList,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage,
    Dimensions
} from "react-native";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            nomeDoAdm: "Administrador",
        }
    }

    componentDidMount() {
        this._pegarNomeDoAdmLogado();
    }

    _pegarNomeDoAdmLogado = async () => {
        try {
            let token = await AsyncStorage.getItem("@opflix:token");
            let usuario = JwtDecode(token);
            let nome = usuario.nome
            this.setState({ nomeDoAdm: nome })
        } catch (error) {
        }
    }


    render() {
        return (
            <SafeAreaView>
                {/* <Nav/> */}
                <StatusBar
                    animated={true}
                    backgroundColor="#A60313"
                    barStyle="light-content"
                />

                <View style={styles.navContainer}>
                    <View style={styles.logo}>
                        <Image source={require("../../assets/img/icon-logo.png")} style={{ width: 50, height: 50 }} />
                        <Text style={styles.textoLogo}>OpFlix</Text>
                    </View>
                    <TouchableOpacity onPress={this.props.navigation.toggleDrawer}>
                        <Image source={require("../../assets/img/menu-icon.png")} style={styles.menuIcon} />
                    </TouchableOpacity>
                </View>

                {/* FIM DO NAV */}

                <Text>{"Bem vindo, " + this.state.nomeDoAdm}</Text>
                <Text style={styles.tituloPrincipal}>Administrador</Text>
                <View>
                    <View>
                        <TouchableOpacity>
                            <Image
                                source={require("../../assets/img/lancamentos-icon.png")}
                                style={{ width: 50, height: 50, }}
                            />

                            <Text>Lançamentos</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Categorias")}>
                            <Image
                                source={require("../../assets/img/categorias-icon.png")}
                                style={{ width: 50, height: 50, }}
                            />

                            <Text>Categorias</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image
                                source={require("../../assets/img/plataformas-icon.png")}
                                style={{ width: 50, height: 50, }}
                            />

                            <Text>Plataformas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require("../../assets/img/addUser-icon.png")}
                                style={{ width: 50, height: 50, }}
                            />

                            <Text>Cadastrar usuário/administrador</Text>
                        </TouchableOpacity>
                    </View>
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
    menuIcon: {
        width: 50,
        height: 35,
        zIndex: 1000,
    },

    tituloPrincipal: {
        textAlign: "center",
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 22,
        paddingVertical: 14,
        width: "90%",

        borderBottomWidth: 3,
        borderColor: "#A60313",
        marginBottom: 5,
    },
    iconeSeta: {
        height: 30,
        width: 30,
        transform: [{ rotate: '270deg' }],
        tintColor: "#999999",

    },

})

export default Dashboard