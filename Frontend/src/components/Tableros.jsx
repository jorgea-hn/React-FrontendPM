import CardTablero from "./CardTablero";
import iconoSincronziar from "../assets/sincronizar.png"


function Tableros() {
    return (
        <>

            <div className="flex items-center ml-10 ">
                <img className="w-4 mr-2" src={iconoSincronziar} alt="" />
                <h2 className="text-left">Espacios de trabajo de usuarios</h2>
            </div>

            <div className="flex flex-row h-32 overflow-x-auto my-4 px-8 py-2 space-x-6">
                <CardTablero />

            </div>
            <p className="text-left ml-10">Ver todos los tableros cerrados</p>
        </>
    )
}

export default Tableros;