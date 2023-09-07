import axios from 'axios';

const API_BASE_URL = 'http://eduardovega04.pythonanywhere.com';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

async function getEspacios(accessToken) {
  try {
    const response = await axiosInstance.get('/api/espacio/', {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Agrega el token de acceso en las cabeceras
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}



async function createEspacio(nombreEspacio, accessToken) {
  try {
    const response = await axiosInstance.post('/api/espacio/', {
      nombre_espacio: nombreEspacio,
    }, {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Agrega el token de acceso en el encabezado
      },
    });

    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error('Error al crear el espacio');
    }
  } catch (error) {
    throw error;
  }
}

const espacioService = {
  getEspacios,
  createEspacio,
};

export default espacioService;
