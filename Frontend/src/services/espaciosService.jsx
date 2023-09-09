import httpInstance from "./InstanceHTTP"

async function getEspacios(accessToken) {
  try {
    const response = await httpInstance.get('/api/espacio/', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function createEspacio(nombreEspacio, accessToken) {
  try {
    const response = await httpInstance.post(
      '/api/espacio/',
      { nombre_espacio: nombreEspacio },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

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
