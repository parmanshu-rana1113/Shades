import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Home1 from './component/Home/home1.jsx'
import Home2 from './component/Home/Home2.jsx'


const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout />,
    children: [

      {
        path: "",
        element: <Home />
      },
      {
        path: "home1",
        element: <Home1 />
      },
      {
        path: "home2",
        element: <Home2 />
      },
      {
        path: "about",
        element: <About />
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
