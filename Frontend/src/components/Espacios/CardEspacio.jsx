import { useNavigate } from 'react-router-dom';

function CardEspacio({ title = "¿Desea crear un tablero?" }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (title === "¿Desea crear un tablero?") {
            navigate("/create");
        }
    };

    return (
        <div className=" cursor-pointer flex bg-gray-100 h-28 p-3  bg-neutral-200 rounded-lg border-l border-r border-b border-solid border-white justify-center items-center" onClick={handleClick}>
            <h3 className="font-semibold text-sm">{title}</h3>
        </div>
    );
}

export default CardEspacio;