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
    path: "/error",
    element: <Error/>,
  },
  {
    path: "/teams",
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
  
]);

ReactDOM.createRoot(document.getElementById('container')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
