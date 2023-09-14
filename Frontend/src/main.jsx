import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './views/Login'
import Register from './views/Register';
import Home from './views/Home';
import Error from './views/Error';

import CreateNewProject from './views/CreateNewProject';
import NewProject from './views/NewProject';
import Projects from './views/Projects';
import VistaTableros from './views/VistaTableros';
import CardEspacio from './components/Espacios/CardEspacio';
import EspaciosTrabajo from './components/Espacios/EspaciosTrabajo';


import CardTablero from './components/Tablero/CardTablero';
import EspaciosTableros from "./components/Tablero/EspaciosTableros"
import Tablero from "./components/Tablero/Tablero"
import CardNewProject from './components/CardNewProject';
import Modal from './components/Modal';
import Navbar from './components/Navbar';


const router = createBrowserRouter([
  {
    path: "/create",
    Component:CreateNewProject,
  },
  {
    path: "/home",
    Component:Home,
  },
  {
    path: "/",
    Component:Login,
  },
  
  {
    path: "/new",
    Component:NewProject,
  },

  {
    path: "/projects",
    Component:Projects,
  },
  {
    path: "/register",
    Component:Register, 
  },
  {
    path: "/tableros/:espacioId",
    Component: VistaTableros,
  },
  // espacios 
  {
    path: "/carde",
    Component: CardEspacio,
  },
  {
    path: "/espaciost",
    Component: EspaciosTrabajo,
  },
  // tableros
  {
    path: "/cardt",
    Component: CardTablero,
  },
  {
    path: "/espaciosta",
    Component: EspaciosTableros,
  },
  {
    path: "/tablero",
    Component: Tablero,
  },

  {
    path: "/cardn",
    Component: CardNewProject,
  },
  {
    path: "/modal",
    Component: Modal,
  },

  {
    path: "/nav",
    Component: Navbar,
  },


  {
    path: "*",
    Component: Error, 
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
