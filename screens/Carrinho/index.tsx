import { ScrollView, View } from "react-native";
import Content from "./components/Content";
import Header from "./components/Header";


export default function Carrinho(){

   //const {idusuario} = route.params;

    return(
        <View style={{flex:1}}>
            <ScrollView horizontal={false}>
            <Header/>
            <Content/>
            </ScrollView>
        </View>
    )
}