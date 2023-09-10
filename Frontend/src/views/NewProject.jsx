import { useNavigate } from 'react-router-dom';
import flecha from "../assets/flechaAtras.png"
function NewProject() {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };




    return (
        <>
            <div className='flex h-screen'>
                <div className="cursor-pointer absolute top-0 left-0 m-4" onClick={goBack}>
                    <img src={flecha} alt="Flecha hacia atrás" className="w-8 h-8 mb-4" />
                </div>
                <div className='w-2/5 flex justify-center  h-screen'>

                    <div class="flex bg-white h-2/5 mt-12 w-2/3 justify-center">

                        <form action="" class="w-screen p-2 ">
                            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                                <h2 class="text-black text-center text-lg font-bold">Nuevo Proyecto</h2>
                            </div>


                            <div class="sm:mx-auto sm:w-full sm:max-w-sm py-2">
                                <label for="username" class="text-black text-sm font-bold">Nombre de proyecto</label>
                                <div class="">
                                    <div class="">
                                        <input id="username" name="username" type="username" autocomplete="username" required class="block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-black bg-opacity-10" />
                                    </div>
                                </div>
                            </div>



                            <div class="sm:mx-auto sm:w-full sm:max-w-sm py-2">
                                <label for="country" class=" text-black text-sm font-bold" >Privacidad</label>
                                <div class="lb">
                                    <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-black bg-opacity-10">
                                        <option disabled selected>Elegir</option>
                                        <option value="">Publico</option>
                                        <option value="">Privado</option>
                                    </select>
                                </div>
                            </div>

                            <div className='m-10'>
                                <button type="submit" class="flex w-full justify-center rounded-md bg-acentuacion px-3 py-1.5 font-md leading-6 text-gray-50 shadow-sm hover:bg-secundario2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Continuar</button>
                            </div>
                        </form>
                    </div>



                </div>



                <div className='bg-secundario1 w-3/5'>
                </div>
            </div>






        </>
    )
}

export default NewProject;