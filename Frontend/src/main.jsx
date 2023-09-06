import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App';
import Login from './components/Login'
import Home from './views/Home';
import Error from './components/Error'
import Teams from './components/Teams';
import Tablero from './components/Tablero';
import Card from './components/Card';
import Sidebar from './components/Sidebar';
import Register from './components/Register';
import ProjectNew from './views/ProjectNew';



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
    path: "/projectnew",
    Component:ProjectNew,
  },


  {
    path: "/home",
    element: <Home/>,
  },
  {
    path:"/teams",
    element: <Teams/>,
  },
  {
    path: "/tablero",
    element: <Tablero/>,
  },
  {
    path: "/card",
    element: <Card/>,
  },
  {
    path: "/sidebar",
    element: <Sidebar/>,
  },
  
  {
    path: "*",
    element: <Error/>, 
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
