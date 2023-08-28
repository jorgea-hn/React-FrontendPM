import icono from "../assets/icono.png"
function Form() {
    return (
        <div class="w-screen h-screen flex items-center justify-center">
            <div class="flex rounded-lg border px-12  bg-gray-300" style={{height:400 }}>

                <div class="flex min-h-full flex-col justify-center px-6 py-4 lg:px-10  ">
                    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 class="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">Ingresar</h2>
                    </div>

                    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                        <form class="space-y-4" action="#" method="POST">
                            <div>
                                <div class="flex items-center justify-between">
                                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Usuario</label>
                                </div>

                                <div class="mt-2">
                                    <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <div class="flex items-center justify-between">
                                    <label for="password" class="block  font-medium leading-6 text-gray-900">Contraseña</label>

                                </div>
                                <div class="mt-2">
                                    <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entrar</button>
                                <div class="text-sm">
                                    <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Olvidaste tu contraseña?</a>
                                </div>
                            </div>
                        </form>

                        <p class="mt-10 mb-10 text-center text-sm text-gray-500">
                            No tienes cuenta?
                            <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Registrate Aqui</a>
                        </p>
                    </div>
                </div>

                <div class="mx-auto my-auto px-6" style={{ width: 200 }}>
                    <img class="" src={icono} alt="icono" />
                </div>

            </div>
        </div>

    );
}

export default Form;
