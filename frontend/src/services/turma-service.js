import { api } from "./api";

export const getTurmasByProfessor = async _id => {
  return api.get(`/school-class/all-classes/${_id}`);
};

export const getTurmaById = async _id => {
  return api.get(`/school-class/${_id}`);
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

export const updateAlunos = async (_id, _name, _students, _grade) => {
  const turma = {
    name: _name,
    students: _students,
    grade: _grade
  }

  return api.patch(`/school-class/update/${_id}`, turma);
}