export const GerarNumero = () => {
  return Math.floor(Math.random() * (10 + 1 - 1) + 1);
};

export const ValidarResposta = (numero1, numero2, respostaUsuario) => {
  const respostaCerta = numero1 * numero2;

  if (respostaUsuario == respostaCerta) {
    return true;
  } else {
    return false;
  }
};
