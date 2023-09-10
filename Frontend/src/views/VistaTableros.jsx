import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Sidebar from "../components/Sidebar";
import EspaciosTableros from "../components/Tablero/EspaciosTableros"


function VistaTableros() {

    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            navigate('/');
        }
        const storedUsername = localStorage.getItem('username');
        setUsername(storedUsername);
    }, [navigate]);

    return (
        <div className="flex">
            <Sidebar username={username} />
            <div className="flex-1 overflow-auto">
                <h1 className="text-xl font-bold text-primario text-center pt-10 mb-6">TUS TABLEROS</h1>
                <EspaciosTableros/>
            </div>
        </div>
    )
}

export default VistaTableros;