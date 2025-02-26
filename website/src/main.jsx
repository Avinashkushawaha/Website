import React from 'react'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import  ReactDOM  from 'react-dom/client'
import './index.css'
import { Layout } from './Layout'
import  Home  from './components/Home'
import  About  from './components/About'
import  Contact  from './components/Contact'
import  Github  from './components/Github'
import  User  from './components/User'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [ 
//       {
//         path: '/',
//         element: <Home />
//       },
      
//       {
//         path: 'about',
//         element: <About />
//       },
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" element={<Github />} />
      <Route path="user/:userid" element={<User />} />
    </Route>

  )
)
  




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
   <RouterProvider router={router} />
   
   
  </React.StrictMode>,
)
