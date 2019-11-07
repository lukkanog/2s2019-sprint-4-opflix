import React,{Component} from "react";
import {Text, SafeAreaView} from "react-native";
import Nav from "../components/Nav";

class Main extends Component{
    render(){
        return(
            <SafeAreaView>
                <Nav/>
                <Text onPress={this.props.navigation.openDrawer}>Main</Text>
            </SafeAreaView>
        )
    }
}
export default Main;