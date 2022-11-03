import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "../../css/Styles";
import { useState } from "react";
import { ip } from "../../../../config/ip";

import * as SQLite from "expo-sqlite";

//constante para referencia a criação do banco de dados 
//dentro do celular

const db = SQLite.openDatabase("mystore.banco");

export default function Main(props: any) {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");


    return (
        <View>
            <TextInput placeholder="Usuário" keyboardType="default" style={styles.caixa} value={usuario} onChangeText={(value) => setUsuario(value)} />
            <TextInput secureTextEntry placeholder="Senha" style={styles.caixa} value={senha} onChangeText={(value) => setSenha(value)} />
            <TouchableOpacity onPress={() => {
                 efetuarLogin(usuario,senha);
                props.acao.navigate("Home");

            }} style={styles.btntllogin}>
                <Entypo name="login" size={24} color="black" />
                <Text> Login </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.acao.navigate("Cadastro")} style={styles.btnlcadastrar}>
                <Entypo name="add-user" size={24} color="black" />
                <Text> Cadastro </Text>
            </TouchableOpacity>
        </View>
    )
}

function efetuarLogin(usuario: any, senha: any) {
    if (usuario == "" || senha == "") {
        return Alert.alert("Erro", "Você deve preencher todos os campos");
    }
    fetch("http://10.26.49.37:8080/api/usuarios/login", {
        method: "POST",
        headers: {
            accept: "application/json",
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeusuario: usuario,
            senha: senha
        })
    })
        .then((response) => response.json())
        .then((rs) => {
            console.log(rs)
            gravarUsuario(rs.payload[0].idusuario,
                rs.output,
                rs.token)
        })
        .catch((erro) => console.error(`Erro -> ${erro}`))
}

// criação da função que constrói a tabela e insere dados
// do usuário autenticada
function gravarUsuario(idusuario:any, situacao:any, token:any) {

    // Vamos realizar 2 transações , onde:
    // 1-será a tabela com os seguintes campos
    //  - id,idusuario,situacao,token
    // 2-será cadastrado na tabela os respectivos dados
    db.transaction((ts)=>{
        ts.executeSql(
            `create table if not exists dados(
                id integer primary key,
                idusuario int,
                situacao text,
                token text
            )`
        );
    });

    db.transaction((tx)=>{
        tx.executeSql(
            `insert into dados(
                idusuario,
                situacao,
                token) values (?,?,?)`,
                [
                    idusuario,
                    situacao,
                    token
                ]
        );

        tx.executeSql(
            `select * from dados`,[],(_,{rows})=>{
                console.log(rows)
            }   
        )

    });
}   