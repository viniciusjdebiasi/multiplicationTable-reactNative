import { ImageBackground, Pressable, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Estilo from "./estilo";

import Img_background from "../../assets/tabuada.jpeg";

export default function Tabuada(props) {
  const InicioResponder = () => {
    props.navigation.navigate("Inicio");
  };

  return (
    <ImageBackground
      source={Img_background}
      resizeMode="contain"
      style={Estilo.Img_background}
    >
      <Pressable onPress={InicioResponder} style={Estilo.button_responder}>
        <Text style={Estilo.texto_button}>RESPONDER</Text>
      </Pressable>
    </ImageBackground>
  );
}
