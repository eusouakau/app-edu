import React, { useContext } from 'react'

import { BrowserRouter as Router , Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from '../contexts/auth-context';

import Home from '../pages/home/Home';
import Login from '../pages/login/login';

const AppRoutes = () => {
    const Private =({children}) => {
        const { authenticated, loading } = useContext(AuthContext);

        if(loading){
            return <div>Loading...</div>
        }

        if(!authenticated){
            return <Navigate to="/login" />
        }

        return children;
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route  exact path="/login" element={<Login/>}/>
                    <Route  exact path="/" element={<Private><Home/></Private>}/>
                </Routes>   
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;