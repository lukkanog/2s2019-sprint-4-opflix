import React,{Component} from "react";
import {Text} from "react-native";

class Main extends Component{
    render(){
        return(
            <Text onPress={this.props.navigation.openDrawer}>Main</Text>
        )
    }
}
export default Main;