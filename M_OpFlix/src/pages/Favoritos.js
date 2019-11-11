import React,{Component} from "react";
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



class Favoritos extends Component{
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
                    <TouchableOpacity onPress={this.props.navigation.toggleDrawer}>
                        <Image source={require("../assets/img/menu-icon.png")} style={styles.menuIcon} />
                    </TouchableOpacity>
                </View>
                {/* FIM DO NAV */}
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
    lista: {

    },
    boxLancamento: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#707070",
        width: "90%",
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 20,
        // marginRight : 100,
    },
    botaoFavoritar: {
        // backgroundColor : "#717171",
        backgroundColor: "#a60313",
        borderWidth: 0.1,
        borderRadius: 50,
        padding: 5,
        marginRight: 10,

    },
    iconeFavoritar: {
        height: 25,
        width: 25,
        tintColor: "#FFF",
    },
    botaoDesfavoritar: {
        backgroundColor: "#a60313",
        borderWidth: 0.1,
        borderRadius: 50,
        padding: 5,
        marginRight: 10,
    },
    iconeDesfavoritar: {
        height: 25,
        width: 25,
    },
    iconeSeta: {
        height: 30,
        width: 30,
        transform: [{ rotate: '270deg' }],
        tintColor: "#999999",

    },
    tituloLancamento: {
        fontWeight: "bold",
        fontSize: 25,
        textAlign: "center",
        marginBottom: 5,
    },
    flexBoxLancamento: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "nowrap",
    },
    botoes: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    data: {
        color: "#11A7F2",
        fontSize: 20,
        fontWeight: "bold",
    },
    flexTexto: {
        flexDirection: "row",
    },
    textoBold: {
        fontWeight: "bold",
    }
})


export default Favoritos;