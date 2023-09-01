import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import React, { useState } from 'react';

import icono from "../assets/Logo.png"
function Sidebar() {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const handleToggleModal = () => {
      setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        authService.logout(); // Llama a la función logout del servicio de autenticación
        navigate('/'); // Redirige al usuario a la página de inicio de sesión
    };

    return (
        <>
            <aside class="bg-principal text-white w-64 min-h-screen p-4">
                <nav>
                    <ul class="space-y-2">
                        <li class="opcion-con-desplegable">
                            <div class="flex items-center justify-center p-2">
                                <div class="flex items-center ">
                                    <img class="h-12 w-auto" src={icono} alt="icono" />
                                </div>
                                <i class="fas fa-chevron-down text-xs"></i>
                            </div>
                        </li>
                        <hr></hr>
                        <li class="opcion-con-desplegable">
                            <div class="flex items-center justify-between p-2 hover:bg-gray-700" onClick={handleToggleModal}>
                                <div class="flex items-center">
                                    <i class="fas fa-calendar-alt mr-2"></i>
                                    <span class="text-md font-regular">Espacio de trabajo</span>
                                </div>
                                <i class="fas fa-chevron-down text-xs"></i>
                            </div>
                            <Modal isOpen={isOpen} handleCloseModal={handleToggleModal} />
                        </li>
                        <li class="opcion-con-desplegable">
                            <div class="flex items-center justify-between p-2 hover:bg-gray-700">
                                <div class="flex items-center">
                                    <i class="fas fa-money-bill-wave mr-2"></i>
                                    <span class="text-md font-regular">Reciente</span>
                                </div>
                                <i class="fas fa-chevron-down text-xs"></i>
                            </div>
                        </li>
                        <li class="opcion-con-desplegable">
                            <div class="flex items-center justify-between p-2 hover:bg-gray-700">
                                <div class="flex items-center">
                                    <i class="fas fa-file-alt mr-2"></i>
                                    <span class="text-md font-regular" >Favorito</span>
                                </div>
                                <i class="fas fa-chevron-down text-xs"></i>
                            </div>
                        </li>
                        <li class="opcion-con-desplegable">
                            <div class="flex items-center justify-between p-2 hover:bg-gray-700">
                                <div class="flex items-center">
                                    <i class="fas fa-file-alt mr-2"></i>
                                    <span class="text-md font-regular" >Plantilla</span>
                                </div>
                                <i class="fas fa-chevron-down text-xs"></i>
                            </div>
                        </li>
                        <li class="opcion-con-desplegable">
                            <div class="flex items-center justify-between p-2 hover:bg-gray-700 " onClick={handleLogout}>
                                <div class="flex items-center">
                                    <i class="fas fa-file-alt mr-2"></i>
                                    <span class="text-md font-regular" >Cerrar Sesion</span>
                                </div>
                                <i class="fas fa-chevron-down text-xs"></i>
                            </div>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}


export default Sidebar;