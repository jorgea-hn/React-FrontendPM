import { useNavigate } from 'react-router-dom';

function CardTablero({ title = "¿Desea crear un tablero?" }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (title === "¿Desea crear un tablero?") {
            navigate("/projectnew");
        }
    };

    return (
        <div className=" cursor-pointer flex bg-gray-100 w-1/4 h-30 p-3 ml-2 bg-neutral-200 rounded-lg border-l border-r border-b border-solid border-white justify-center items-center" onClick={handleClick}>
            <h3 className="font-semibold text-sm">{title}</h3>
        </div>
    );
}

export default CardTablero;