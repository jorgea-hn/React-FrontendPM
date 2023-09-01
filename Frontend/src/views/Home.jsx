import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import { useNavigate } from 'react-router-dom';



function Home() {
  const navigate = useNavigate();

  // Verificar si el usuario tiene un token en localStorage
  const token = localStorage.getItem('token');
  if (!token) {
    // Si no hay token, redirigir al formulario de inicio de sesión
    navigate('/');
    return null; // Puedes mostrar un mensaje o componente de carga aquí si lo deseas
  }





  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 overflow-auto">
          <h1 className="text-xl font-bold text-primario text-center pt-10">TUS ESPACIOS DE TRABAJO</h1>
      </div>
    </div>
  );
}

export default Home;