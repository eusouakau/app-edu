import React, { useContext } from 'react'

import { BrowserRouter as Router , Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from '../contexts/auth-context';

import HomeAluno from '../pages/home/aluno/home-aluno';
import HomeProfessor from '../pages/home/professor/home-professor';

import Login from '../pages/login/login';

import Conteudos from '../pages/conteudos/conteudos';
import DetalhesConteudo from '../pages/conteudos/detalhes-conteudo/detalhes-conteudo';
import Turma from '../pages/turma/turma';

import CadastroAluno from '../pages/cadastro/aluno/cadastro-aluno';
import CadastroUsuario from '../pages/cadastro/usuario/cadastro-usuario';
import CadastroTurma from '../pages/cadastro/turma/cadastro-turma';

const AppRoutes = () => {
    const Private =({children}) => {
        const { authenticated, loading } = useContext(AuthContext);

        if(loading){
            return <div>Loading...</div>
        }

        if(!authenticated){
            return <Navigate to="/" />
        }

        return children;
    }

    return (
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/home-aluno" element={<HomeAluno/>}/>
            <Route exact path="/home-professor" element={<HomeProfessor/>}/>

            <Route exact path="/cadastro" element={<CadastroUsuario/>}/>
            <Route exact path="/turma/:id/cadastro-aluno" element={<CadastroAluno/>}/>
            <Route exact path="/cadastro-turma" element={<CadastroTurma/>}/>

            <Route exact path="/conteudos" element={<Conteudos/>}/>
            <Route exact path="/detalhes-conteudo" element={<DetalhesConteudo/>}/>
            <Route exact path="/turma/:id" element={<Turma />}/>
          </Routes>   
        </AuthProvider>
      </Router>
    )
}

export default AppRoutes;