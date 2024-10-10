import { View, Text, ImageBackground, Pressable } from "react-native";

import Estilo from "./estilo";

import Img_background from "../../assets/trofeu.jpg";

export default function RespostaCorreta(props) {
  const ResponderProxima = () => {
    props.navigation.navigate("Inicio");
  };

  return (
    <ImageBackground
      style={Estilo.img_background}
      source={Img_background}
      resizeMode="contain"
    >
      <View style={Estilo.main}>
        <Text style={Estilo.titulo}>PARABÉNS, VOCÊ ACERTOU!</Text>
        <Pressable onPress={ResponderProxima} style={Estilo.button_responder}>
          <Text style={Estilo.texto_button}>PRÓXIMA</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}
