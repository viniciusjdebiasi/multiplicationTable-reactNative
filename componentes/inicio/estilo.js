import { StyleSheet } from "react-native";

const Estilo = StyleSheet.create({
  Img_background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  main: {
    backgroundColor: "rgba(255,250,250, 0.7)",
    width: 320,
    height: 320,
    justifyContent: "center",
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

  container_buttons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },

  button_pular: {
    backgroundColor: "#DC143C",
    height: 50,
    width: 130,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  button_responder: {
    backgroundColor: "#228B22",
    height: 50,
    width: 130,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  texto_button: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },

  container_input: {
    flexDirection: "row",
    marginBottom: 20,
  },

  texto_questao: {
    fontSize: 25,
    fontWeight: "bold",
  },

  input: {
    borderWidth: 2,
    borderColor: "#1E90FF",
    borderRadius: 5,
    width: 100,
    height: 35,
  },

  button_tabuada: {
    backgroundColor: "#8A2BE2",
    height: 50,
    width: "90%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Estilo;
