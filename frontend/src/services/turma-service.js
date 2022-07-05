import { api } from "./api";

export const getTurmasByProfessor = async _id => {
  return api.get(`/school-class/list-class/${_id}`);
};

export const getTurmaById = async _id => {
  return api.get(`/school-class/class/${_id}`);
};

export const cadastrarTurma = async (_name, _school, _grade, _teacher) => {
  const turma = {
    name: _name,
    teacher: _teacher,
    school: _school, 
    grade: _grade
  };
  return api.post("/school-class", turma);
};

export const deletarTurma = async _id => {
  return api.delete(`/school-class/${_id}`);
}