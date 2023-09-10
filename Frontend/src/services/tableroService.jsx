
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

const tableroService = {
  getTableros,
};

export default tableroService;