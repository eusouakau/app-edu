import axios from "axios";

export const api = axios.create({ 
  baseURL: "http://localhost:3050",
  headers: {
    Authorization: '',
  },
});

export const cadastrarUsuario = async (_nome, _email, _password) => {
  const user = {
    name: _nome, 
    email: _email, 
    password: _password
  }
  return api.post("/user/cadastrar", user);
};

export const logar = async (_email, _password) => {
  const user = { 
    email: _email, 
    password: _password
  }
  return api.post("/user/login", user);
};

export const recuperarSenha = async (email) => {
  return api.post("/user/recuperar-senha", {email});
};

export const getTurmas = async () => {
  return api.get("/school-class/");
}

export const getTurmaById = async id => {
  return api.get(`/school-class/${id}`);
}
