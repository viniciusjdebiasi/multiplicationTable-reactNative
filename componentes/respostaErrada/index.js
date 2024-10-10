import { View, Text, ImageBackground, Pressable } from "react-native";

import Estilo from "./estilo";

import Img_background from "../../assets/errou.jpg";

export default function RespostaErrada(props) {
  const ProximaQuestao = () => {
    props.navigation.navigate("Inicio");
  };

  const Tabuada = () => {
    props.navigation.navigate("Tabuada");
  };

  return (
    <ImageBackground source={Img_background} style={Estilo.Img_background}>
      <View style={Estilo.main}>
        <Text style={Estilo.titulo}>OPS! RESPOSTA ERRADA!</Text>
        <Pressable onPress={Tabuada} style={Estilo.button_tabuada}>
          <Text style={Estilo.texto_button}>VER TABUADA</Text>
        </Pressable>
        <Pressable onPress={ProximaQuestao} style={Estilo.button_responder}>
          <Text style={Estilo.texto_button}>PRÓXIMA</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}
