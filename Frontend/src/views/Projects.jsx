import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Sidebar from "../components/Sidebar";
import Navbar from '../components/Navbar';
import EspaciosTrabajo from "../components/Espacios/EspaciosTrabajo";

function Projects() {
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
        <>
            <div className="flex">
                <Sidebar username={username} />
                
                <div className="flex-1 overflow-auto">
                    <Navbar/>
                </div>
            </div>


        </>
    )
}

export default Projects;