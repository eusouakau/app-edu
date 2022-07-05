import { api } from "./api";

export const cadastrarUsuario = async (_nome, _email, _password) => {
  const user = {
    name: _nome, 
    email: _email, 
    password: _password
  };
  return api.post("/user/cadastrar", user);
};

export const logar = async (_email, _password) => {
  const user = { 
    email: _email, 
    password: _password
  };
  return api.post("/user/login", user);
};

export const recuperarSenha = async _email => {
  return api.post("/user/recuperar-senha", {_email});
};