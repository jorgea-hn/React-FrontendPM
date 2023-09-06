import icono from "../assets/librito.png"
import iconoCerrar from "../assets/cerrar.svg"

function Modal({ isOpen, handleCloseModal }) {
    return (
        <>
            {isOpen && (
                <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                    <div class="fixed inset-0 z-10 overflow-y-auto">
                        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-screen-md">

                                <div class=" flex bg-white   ">
                                    <div class="w-1/2  flex min-h-full flex-col justify-center py-10 pl-16 mr-10">

                                        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                                            <h2 class="text-black text-lg font-bold">Vamos a crear un Espacio de Trabajo</h2>
                                        </div>

                                        <div class="sm:mx-auto sm:w-full sm:max-w-sm py-2">
                                            <p class="text-black text-sm">Impulse su productividad facilitandoles a todos el acceso a los tableros en una unica ubicacion</p>
                                        </div>


                                        <div class="sm:mx-auto sm:w-full sm:max-w-sm py-2">
                                            <label for="username" class="text-black text-sm font-bold">Nombre del espacio de trabajo</label>
                                            <div class="">
                                                <div class="">
                                                    <input id="username" name="username" type="username" autocomplete="username" required class="block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-black bg-opacity-10" placeholder="No country CO." />
                                                </div>
                                                <span class="text-black text-xxs">Este es el nombre de su empresa, Equipo u organizacion</span>
                                            </div>
                                        </div>


                                        <div class="sm:mx-auto sm:w-full sm:max-w-sm py-2">
                                            <label for="country" class=" text-black text-sm font-bold" >Tipo de espacio de Trabajo</label>
                                            <div class="lb">
                                                <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-black bg-opacity-10">
                                                    <option disabled selected>Elegir</option>
                                                    <option value="">Operaciones</option>
                                                    <option value="">Marketing</option>
                                                    <option value="">CRM de ventas</option>
                                                    <option value="">Ingenieria y TI</option>
                                                    <option value="">Empresa pequeña</option>
                                                    <option value="">Recursos Humanos</option>
                                                    <option value="">Otros.</option>
                                                </select>
                                            </div>
                                        </div>


                                        <div class="sm:mx-auto sm:w-full sm:max-w-sm py-2">
                                            <label for="about" class="text-black text-sm font-bold ">Descripcion el espacio de Trabajo</label><span class="text-xxs text-black"> Opcional</span>
                                            <div class="text-black">
                                                <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-black bg-opacity-10" placeholder="Nuestro equipo organiza todo aqui"></textarea>
                                            </div>
                                            <p class="text-black text-sm">Incorpora a tus miembros con unas cuantas palabras sobre tu espacio de Trabajo.</p>
                                        </div>


                                        <div>
                                            <button type="submit" class="flex w-full justify-center rounded-md bg-acentuacion px-3 py-1.5 font-md leading-6 text-gray-50 shadow-sm hover:bg-secundario2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Continuar</button>
                                        </div>



                                    </div>

                                    <div class="flex w-1/2 bg-acentuacion">
                                        <div class="mx-auto my-auto px-6" style={{ width: 200 }}>
                                            <img src={icono} alt="icono" />
                                        </div>
                                    </div>

                                </div>


                                <div className="absolute top-4 right-4 cursor-pointer w-6" onClick={handleCloseModal}>
                                    <img src={iconoCerrar} alt="Cerrar" />
                                </div>


                                {/* <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" onClick={handleCloseModal}>Deactivate</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}


export default Modal;