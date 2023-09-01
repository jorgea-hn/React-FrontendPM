import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App';
import Home from './views/Home';
import Error from './components/Error'
import Teams from './components/Teams';
import Tablero from './components/Tablero';
import Card from './components/Card';
import Sidebar from './components/Sidebar';
import Register from './components/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
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
    path: "/register",
    element: <Register/>, 
  },
  {
    path: "*",
    element: <Error/>, 
  },
  
]);

ReactDOM.createRoot(document.getElementById("container")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
