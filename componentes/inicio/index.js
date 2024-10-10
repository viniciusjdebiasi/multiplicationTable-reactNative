import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  ImageBackground,
  Button,
} from "react-native";

import { ValidarResposta, GerarNumero } from "./funcoes";

import Img_background from "../../assets/fundo.png";
import Estilo from "./estilo";

export default function Inicio(props) {
  const [primeiroNumero, setPrimeiroNumero] = useState(1);
  const [segundoNumero, setSegundoNumero] = useState(1);
  const [respostaUsuario, setRespostaUsuario] = useState();

  const CriarQuestao = () => {
    setPrimeiroNumero(GerarNumero());
    setSegundoNumero(GerarNumero());
    setRespostaUsuario("");
  };

  const Responder = () => {
    if (ValidarResposta(primeiroNumero, segundoNumero, respostaUsuario)) {
      props.navigation.navigate("Resposta Correta");
    } else {
      props.navigation.navigate("Resposta Errada");
    }

    CriarQuestao();
  };

  const AbrirTelaTabuada = () => {
    props.navigation.navigate("Tabuada");
  };

  return (
    <ImageBackground
      style={Estilo.Img_background}
      source={Img_background}
      resizeMode="cover"
    >
      <View style={Estilo.main}>
        <Text style={Estilo.titulo}>Duvido você acertar essa!</Text>
        <View style={Estilo.container_input}>
          <Text style={Estilo.texto_questao}>
            {primeiroNumero} X {segundoNumero} ={" "}
          </Text>
          <TextInput
            style={Estilo.input}
            textAlign="center"
            keyboardType="number-pad"
            onChangeText={setRespostaUsuario}
            value={respostaUsuario.toString("")}
            autoFocus={true}
          />
        </View>

        <View style={Estilo.container_buttons}>
          <Pressable style={Estilo.button_pular} onPress={CriarQuestao}>
            <Text style={Estilo.texto_button}>PULAR</Text>
          </Pressable>

          <Pressable onPress={Responder} style={Estilo.button_responder}>
            <Text style={Estilo.texto_button}>RESPONDER</Text>
          </Pressable>
        </View>

        <Pressable onPress={AbrirTelaTabuada} style={Estilo.button_tabuada}>
          <Text style={Estilo.texto_button}>VER TABUADA</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}
