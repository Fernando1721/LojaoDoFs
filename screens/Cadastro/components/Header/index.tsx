import { Text, View } from "react-native";
import { styles } from "../../../Login/css/Styles";

export default function Header(){
    return(
        <View>
            <Text style={styles.titulo}>
                Cadastro
            </Text>

        </View>

    )
}