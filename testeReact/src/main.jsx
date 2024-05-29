import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UndertalePage from './views/Undertale/UndertalePage.jsx'
import Home from './views/Home/Home.jsx'
import Analises from './views/Analises/Analises.jsx'

// Configurar Router
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom';

// const router = createBrowserRouter(
//   [
//     {path: "/", element: <Home></Home>},
//     {path: "undertale", element: <UndertalePage/>}
//   ]
// )

const router = createBrowserRouter(
  [
    {
      path: "/", 
      element: <App></App>,
      children:
      [
        {path: "/", element: <Home></Home>},
        {path: "analise", element: <Analises></Analises>},
        {path: "undertale", element: <UndertalePage/>},
      ]
   },
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
