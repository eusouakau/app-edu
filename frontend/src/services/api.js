import axios from "axios";

export const api = axios.create({ baseURL: "http://localhost:3050" });

export const createSession = async (email, password) => {
  return api.post("/sessions", { email, password });
};

export const cadastrarUsuario = async (nome, email, senha) => {
  return axios.post("user/cadastrar", { email });
};

export const login = async (email, password) => {
  return axios.post("user/login", {email, password});
}

export const recuperarSenha = async (email) => {
  return axios.post("user/recuperar-senha", {email});
}
