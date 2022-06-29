import React, { useContext } from 'react'

import { BrowserRouter as Router , Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from '../contexts/auth-context';

import HomeEstudante from '../pages/home/estudante/home-estudante';
import Login from '../pages/login/login';
import CadastroUsuario from '../pages/cadastro/usuario/cadastro-usuario';
import Conteudos from '../pages/conteudos/conteudos';
import DetalhesConteudo from '../pages/conteudos/detalhes-conteudo/detalhes-conteudo';
import HomeProfessor from '../pages/home/professor/home-professor';
import Turma from '../pages/turma/turma';
import CadastroAluno from '../pages/cadastro/aluno/cadastro-aluno';

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
            <Route exact path="/home-estudante" element={<HomeEstudante/>}/>
            <Route exact path="/cadastro" element={<CadastroUsuario/>}/>
            <Route exact path="/conteudos" element={<Conteudos/>}/>
            <Route exact path="/detalhes-conteudo" element={<DetalhesConteudo/>}/>
            <Route exact path="/home-professor" element={<HomeProfessor/>}/>
            <Route exact path="/turma" element={<Turma/>}/>
            <Route exact path="/cadastro-aluno" element={<CadastroAluno/>}/>
          </Routes>   
        </AuthProvider>
      </Router>
    )
}

export default AppRoutes;