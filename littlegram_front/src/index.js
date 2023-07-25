import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './views/login/Login';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './views/register/Register';
import DashBoard from './views/dashBoard/DashBoard';
import GerenciarFotos from './views/gerenciarFotos/GerenciarFotos'
import VerificandoEmail from './views/verificandoEmail/VerificandoEmail';
const router = createBrowserRouter([
  {
    path: "/",
    Component:Login
  },
  {
    path: "/register",
    Component:Register
  },
  
  {
    path: "/home",
    Component:DashBoard
  },
  {
    path: "/photos",
    Component:GerenciarFotos
  },
  {
    path : "/confirm-account/:email/:token",
    Component: VerificandoEmail,
    
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
