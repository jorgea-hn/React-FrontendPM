import React, { useState, useEffect } from 'react';
import espaciosService from "../services/espaciosService";

import CardEspacio from "../components/CardEspacio"
import iconoSincronziar from "../assets/sincronizar.png"


function EspaciosTrabajo() {

  const [espacios, setEspacios] = useState([]);

  useEffect(() => {
    async function fetchEspacios() {
      try {
        // Obtén el token de acceso desde localStorage
        const accessToken = localStorage.getItem('accessToken');

        // Verifica si el token de acceso está definido
        if (!accessToken) {
          throw new Error('Token de acceso no encontrado en localStorage');
        }

        // Llama al servicio para obtener los espacios y pasa el token de acceso
        const espaciosData = await espaciosService.getEspacios(accessToken);

        setEspacios(espaciosData);
      } catch (error) {
        console.error('Error al obtener espacios:', error.message);
      }
    }

    fetchEspacios();
  }, []);



  useEffect(() => {
    // Imprime los detalles completos de cada espacio en la consola
    espacios.forEach((espacio) => {
        console.log("Detalles del espacio:", espacio);
    });
}, [espacios]);

  return (
    <>

      <div className="flex items-center ml-10 ">
        <img className="w-4 mr-2" src={iconoSincronziar} alt="" />
        <h2 className="text-left">Espacios de trabajo de usuarios</h2>
      </div>

      <div className="flex flex-row h-32 overflow-x-auto my-4 px-8 py-2 space-x-6">
        <CardEspacio />
        {espacios.map((espacio) => (
          <CardEspacio key={espacio.id} title={espacio.nombre_espacio} />
        ))}

      </div>

      <p className="text-left ml-10">Ver todos los tableros cerrados</p>
    </>
  )
}

export default EspaciosTrabajo;