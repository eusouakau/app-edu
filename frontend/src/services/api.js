import axios from "axios";

export const api = axios.create({ baseURL: "http://localhost:3000" });

export const createSession = async (email, password) => {
  return api.post("/sessions", { email, password });
};

export const cadastrarUsuario = async (nome, email, senha) => {
  return axios.post("/cadastrar", { email });
};

export const login = async (email, password) => {
  return axios.post("/login", {email, password});
}

export const recuperarSenha = async (email) => {
  return axios.post("/recuperar-senha", {email});
}

export const getAllAlunos = async () => {
  return axios.get('/');
}