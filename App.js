import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Navegacao = createStackNavigator();

import Inicio from "./componentes/inicio";
import Tabuada from "./componentes/tabuada";
import RespostaCorreta from "./componentes/respostaCorreta";
import RespostaErrada from "./componentes/respostaErrada";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Navegacao.Navigator screenOptions={{ headerShown: false }}>
        <Navegacao.Screen name="Inicio" component={Inicio}></Navegacao.Screen>
        <Navegacao.Screen name="Tabuada" component={Tabuada}></Navegacao.Screen>
        <Navegacao.Screen
          name="Resposta Correta"
          component={RespostaCorreta}
        ></Navegacao.Screen>
        <Navegacao.Screen
          name="Resposta Errada"
          component={RespostaErrada}
        ></Navegacao.Screen>
      </Navegacao.Navigator>
    </NavigationContainer>
  );
}
