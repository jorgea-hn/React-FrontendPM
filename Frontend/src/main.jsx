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

import Error from './views/Error'
import Teams from './components/Teams';
import Tablero from './components/Tablero';
import Card from './components/Card';
import Sidebar from './components/Sidebar';

import CreateNewProject from './views/CreateNewProject';
import NewProject from './views/NewProject';
import Navbar from './components/Navbar';
import Projects from './views/Projects';



const router = createBrowserRouter([
  {
    path: "/",
    Component:Login,
  },
  {
    path: "/register",
    Component:Register, 
  },
  {
    path: "/home",
    Component:Home,
  },
  {
    path: "/create",
    Component:CreateNewProject,
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
    path: "*",
    Component: Error, 
  },


  // {
  //   path: "/navbar",
  //   element: <Navbar/>,
  // },

  // {
  //   path:"/teams",
  //   element: <Teams/>,
  // },
  // {
  //   path: "/tablero",
  //   element: <Tablero/>,
  // },
  // {
  //   path: "/card",
  //   element: <Card/>,
  // },
  // {
  //   path: "/sidebar",
  //   element: <Sidebar/>,
  // },
  
  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
