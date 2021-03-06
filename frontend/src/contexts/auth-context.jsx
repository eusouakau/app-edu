import React, { useState, useEffect, createContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { logar } from '../services/user-service';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (recoveredUser && token) {
        setUser(JSON.parse(recoveredUser));
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await logar(email, password);
    const loggedUser = response.data.user;
    const token = response.data.token;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setUser(loggedUser);
    switch(user.role) {
      case "teacher": navigate("/home-professor"); break;
      case "student": navigate("/home-estudante"); break;
      default: navigate("/"); break;
    }
    
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{authenticated: !!user, user, isLoading, login, logout}}>
        {children}
    </AuthContext.Provider>
  );
}