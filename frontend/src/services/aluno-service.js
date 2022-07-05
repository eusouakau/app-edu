import { api } from "./api";

export const getAlunoById = async _id => {
  return api.get(`/user/${_id}`);
};

export const cadastrarAluno = async (
  _name, 
  _email, 
  _password,
  _school, 
  _grade, 
  _schoolClass
) => {
  const user = {
    name: _name,
    email: _email,
    password: _password,
    school: _school,
    grade: _grade,
    schoolClass: _schoolClass
  }

  return api.post("/user/cadastrar-aluno", user);
};