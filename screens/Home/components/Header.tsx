import { AntDesign } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../css/Styles";

export default function Header(props:any){

    return (
        <View style={styles.header}>
            <Image source={{uri:"https://executivalab.com.br/wp-content/uploads/2021/07/modelo-de-logomarca-simbolo-apple.png"}} style={styles.logo} />
            <Text style={styles.titulo}> Loja Do F's </Text>

            <TouchableOpacity onPress={()=>{
                props.tela.navigate("Carrinho")
            }}>

            <AntDesign name="shoppingcart" size={28} color="white"/>

            </TouchableOpacity>
                
        </View>
    )
}