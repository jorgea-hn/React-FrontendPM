import axios from 'axios';

const API_BASE_URL = 'http://eduardovega04.pythonanywhere.com';
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

async function login(username, password) {
  try {
    const response = await axiosInstance.post('/api/token/', {
      username,
      password,
    });

    if (!response.data.access) {
      throw new Error('Credenciales incorrectas');
    }

    // Almacenar el token de acceso y el token de actualización en localStorage
    localStorage.setItem('accessToken', response.data.access);
    localStorage.setItem('refreshToken', response.data.refresh);
    localStorage.setItem('username', username);

    return response.data;
  } catch (error) {
    throw error;
  }
}

function logout() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('username');
}

async function registerUser(username, email, password) {
  try {
    const response = await axiosInstance.post('/api/registro/', {
      username,
      email,
      password,
    });

    if (!response.data.success) {
      throw new Error(response.data.error_message);
    }

    return { success: true, data: response.data };
  } catch (error) {
    throw error;
  }
}

const authService = {
  login,
  logout,
  registerUser,
};

export default authService;

