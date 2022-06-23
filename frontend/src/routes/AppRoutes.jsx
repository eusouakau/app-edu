import React, { useContext } from 'react'

import { BrowserRouter as Router , Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from '../contexts/auth-context';

import Home from '../pages/home/home';
import Login from '../pages/login/login';
import Cadastro from '../pages/cadastro/cadastro';
import Conteudos from '../pages/conteudos/conteudos';
import DetalhesConteudo from '../pages/conteudos/detalhes-conteudo/detalhes-conteudo';

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
            <Route  exact path="/" element={<Login/>}/>
            <Route  exact path="/home" element={<Home/>}/>
            <Route  exact path="/cadastro" element={<Cadastro/>}/>
            <Route  exact path="/conteudos" element={<Conteudos/>}/>
            <Route  exact path="/detalhes-conteudo" element={<DetalhesConteudo/>}/>
          </Routes>   
        </AuthProvider>
      </Router>
    )
}

export default AppRoutes;