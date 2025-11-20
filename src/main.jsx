import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './Components/About.jsx'
import Error from './Components/Error.jsx'
import Contact from './Components/Contact.jsx'
import Body from './Components/Body.jsx'
import RestaurantMenu from './Components/RestaurantMenu.jsx'
import { useParams } from 'react-router-dom'


import { createBrowserRouter , RouterProvider } from 'react-router-dom'


const appRouter =createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
         path:'/',
         element:<Body/>,
      },
      {
         path:'/home',
         element:<Body/>,
      },
      {
         path:'/about',
         element:<About/>,
      },
      {
        path:'/contact',
        element:<Contact/>,
      },
      {
        path:'/restaurant',
        element:<RestaurantMenu/>,
      },
     
    ],
    errorElement:<Error/>
  },
 
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <RouterProvider router={appRouter}/>
  </StrictMode>
)
