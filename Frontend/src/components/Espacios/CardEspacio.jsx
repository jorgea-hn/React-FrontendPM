import { useNavigate } from 'react-router-dom';
import iconoCerrar from "../../assets/cerrar.svg"

function CardEspacio({ title, espacioId , onDelete}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/tableros/${espacioId}`);
    };

    const handleDelete = async () => {
        if (window.confirm('¿Estás seguro de eliminar este espacio de trabajo?')) {
          // Llama a la función onDelete con espacioId
          onDelete(espacioId);
        }
      };

    // const handleClick = () => {
    //     if (title === "¿Desea crear un tablero?") {
    //         navigate("/create");
    //     }
    // };

    return (
        <div className="cursor-pointer flex bg-gray-100 h-28 p-3 bg-neutral-200 rounded-lg border-l border-r border-b border-solid border-white justify-center items-center">
      <div onClick={handleClick}>
        <h3 className="font-semibold text-sm">{title}</h3>
      </div>
      <button onClick={handleDelete} className="text-red-500 ml-2 hover:text-red-700">
        <img src={iconoCerrar} alt="Cerrar" />
      </button>
    </div>
    );
}

export default CardEspacio;