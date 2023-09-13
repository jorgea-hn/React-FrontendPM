import { useNavigate } from 'react-router-dom';
import iconoCerrar from "../../assets/cerrar.svg"

function CardEspacio({ title, espacioId, onDelete }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (window.confirm('¿Estás seguro de eliminar este espacio de trabajo?')) {
      // Llama a la función onDelete con espacioId
      onDelete(espacioId);
    }
  };

  const handleClick = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const espacioDetallado = await getEspacioDetallado(accessToken, espacioId);

      // Redirige a VistaTableros y pasa la información detallada del espacio como estado de ruta
      navigate(`/tableros/${espacioId}`, { espacioDetallado });
    } catch (error) {
      console.error('Error al obtener información detallada del espacio:', error);
    }
  };

  // const handleClick = () => {
  //     if (title === "¿Desea crear un tablero?") {
  //         navigate("/create");
  //     }
  // };

  return (
    <div className="cursor-pointer bg-gray-100 h-28 p-3 bg-neutral-200 rounded-lg border-l border-r border-b border-solid border-white flex flex-col">
      <div className="flex justify-end cursor-pointer w-4" onClick={handleDelete}>
        <img className="text-center" src={iconoCerrar} alt="Cerrar" />
      </div>
      <div className="flex-grow flex justify-center items-center" onClick={handleClick}>
        <h3 className="font-semibold text-sm">{title}</h3>
      </div>
    </div>
  );
}

export default CardEspacio;