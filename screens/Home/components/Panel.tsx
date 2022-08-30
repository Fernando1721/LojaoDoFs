import { Image, View } from "react-native";
import { styles } from "../../Login/css/Styles";

export default function Panel(){
    return(
        <View style={{height:"30%"}}>
            <Image source={{uri:"https://www.queagito.com/wp-content/uploads/2021/01/260.jpeg"}} style={{width:"100%", height:"100%", resizeMode:"cover"}}/>
        </View>

    )
}