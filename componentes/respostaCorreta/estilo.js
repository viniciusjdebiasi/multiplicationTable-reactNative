import { StyleSheet } from "react-native";

const Estilo = StyleSheet.create({
  img_background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  main: {
    width: 320,
    height: 550,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
  },

  titulo: {
    color: "#1E90FF",
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
    marginBottom: 20,
  },

  button_responder: {
    backgroundColor: "#228B22",
    height: 50,
    width: 300,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  texto_button: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default Estilo;
