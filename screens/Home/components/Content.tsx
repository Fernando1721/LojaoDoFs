import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View, ActivityIndicator, TouchableOpacity } from "react-native";
import { ipspring } from "../../../config/ip";

export default function Content(props:any){

    const [carregando, setCarregando] = useState(true);


    const [produtos, setProdutos] = useState([{
        idproduto: "",
        nomeproduto: "",
        preco: "",
        foto1: "foto.png"
    }]);

    useEffect(()=>{
        fetch(`${ipspring}/api/produto/listar`)
        .then((response)=>response.json())
        .then((rs)=> {
            
            setProdutos(rs)
            setCarregando(false);

        })
        .catch((erro)=>console.error(`Erro ao executar a api -> ${erro}`));
    }, []);

    return (
        <View style={{flex:1, justifyContent:"center", alignContent:"center"}}>
          
            <Text>Conteúdo</Text>
            { carregando ? (<ActivityIndicator size={"large"} color={"blue"}/>): (produtos.map((itens,ix)=>(
                    <View key={ix}>
                        <TouchableOpacity onPress={()=>props.tela.navigate("Detalhes",{ idproduto:itens.idproduto })}>
                      <Image source={{uri:`${itens.foto1}`}} style={{width:200, height:200, resizeMode:"cover"}}/>
                      <Text>{itens.nomeproduto}</Text>  
                      <Text>{itens.preco}</Text>  
                      </TouchableOpacity>
                       
                    </View>    
                )))}
        </View>

    )
}