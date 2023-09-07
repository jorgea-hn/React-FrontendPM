import Sidebar from "../components/Sidebar";
import EspaciosTrabajo from "../components/EspaciosTrabajo";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si el usuario tiene un token en localStorage
    const token = localStorage.getItem('accessToken');
    if (!token) {
      // Si no hay token, redirigir al formulario de inicio de sesión
      navigate('/');
      return;
    }

    const storedUsername = localStorage.getItem('username');

    // Establecer el nombre de usuario en el estado del componente
    setUsername(storedUsername);
  }, [navigate]);

  return (
    <div className="flex">
      <Sidebar username={username} />
      <div className="flex-1 overflow-auto">
        <h1 className="text-xl font-bold text-primario text-center pt-10 mb-6">TUS ESPACIOS DE TRABAJO</h1>
        <EspaciosTrabajo />
      </div>
    </div>
  );
}

export default Home;
