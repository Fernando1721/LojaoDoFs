import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        backgroundColor:"black",
        justifyContent:"space-between",
        alignItems:"center",
        height:"15%",
        flex:2,
        padding:20

    },
    logo:{
        width:50,
        height:50,
        resizeMode:"cover"
    },
    titulo:{
        fontSize:20,
        color:"white",
        fontWeight:"bold"
    },
    btncarrinho:{
        padding:20,
        backgroundColor:"black",
        margin:20,
        borderRadius:20,
        marginLeft:"auto",
        marginRight:"auto",
    },
    txtcarrinho:{
        color:"#fff",
        fontSize:19,
        fontWeight:"bold",
        textAlign:"center"
    }
})