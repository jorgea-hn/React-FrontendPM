const API_BASE_URL = 'http://eduardovega04.pythonanywhere.com';
// http://eduardovega04.pythonanywhere.com/api/token/

// Función para iniciar sesión y obtener un token JWT
async function login(username, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/token/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Credenciales incorrectas');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}


function logout() {
  localStorage.removeItem('token');
}



async function registerUser(username, email, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/registro/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }), 
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error_message);
    }

    const data = await response.json();
    return { success: true, data };
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