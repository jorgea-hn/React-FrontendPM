
import { useNavigate } from 'react-router-dom';

function CardTablero({ title = "Nombre del Tablero", id }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/tablero/${id}`);
    };

    return (
        <div className="cursor-pointer flex bg-gray-100 h-28 p-3 bg-neutral-200 rounded-lg border-l border-r border-b border-solid border-white justify-center items-center" onClick={handleClick}>
            <h3 className="font-semibold text-sm">{title}</h3>
        </div>
    );
}

export default CardTablero;

