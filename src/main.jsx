import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Layout from './Layout'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'
/*const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[{
      path:'',
      element:<Home/>
    },{
      path:'about',
      element:<About/>
    },{
      path:'contact',
      element:<Contact/>
    }]
  }
]
)*/About

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/user/:id' element={<User/>}></Route>
      <Route path='/github' element={<Github/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
