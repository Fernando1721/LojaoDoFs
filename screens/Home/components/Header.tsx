import { AntDesign } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import { styles } from "../css/Styles";

export default function Header(){
    return (
        <View style={styles.header}>
            <Image source={{uri:"https://executivalab.com.br/wp-content/uploads/2021/07/modelo-de-logomarca-simbolo-apple.png"}} style={styles.logo} />
            <Text style={styles.titulo}> Mystore </Text>
            <AntDesign name="shoppingcart" size={24} color="white"/>
        </View>
    )
}