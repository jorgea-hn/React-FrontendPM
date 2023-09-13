
import httpInstance from "./InstanceHTTP";

async function getTableros(accessToken) {
  try {
    const response = await httpInstance.get('/api/tablero/', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}


async function crearTablero(accessToken, nombreTablero, espacioId) {
  try {
    const response = await httpInstance.post(
      '/api/tablero/',
      { nombre_tablero, espacio_id: espacioId },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error('Error al crear el tablero');
    }
  } catch (error) {
    throw error;
  }
}

async function getTableroDetallado(accessToken, tableroId) {
  try {
    const response = await httpInstance.get(`/api/tablero/${tableroId}/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function editarTablero(accessToken, tableroId, nuevoNombre) {
  try {
    const response = await httpInstance.put(
      `/api/tablero/${tableroId}/`,
      { nombre_tablero: nuevoNombre },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Error al editar el tablero');
    }
  } catch (error) {
    throw error;
  }
}

async function eliminarTablero(accessToken, tableroId) {
  try {
    const response = await httpInstance.delete(`/api/tablero/${tableroId}/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status === 204) {
      return true; // Éxito en la eliminación
    } else {
      throw new Error('Error al eliminar el tablero');
    }
  } catch (error) {
    throw error;
  }
}

const tableroService = {
  getTableros,
  crearTablero,
  getTableroDetallado,
  editarTablero,
  eliminarTablero,
};

export default tableroService;