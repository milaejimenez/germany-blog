import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Router,
  Outlet
} from "react-router-dom";
import './style.scss'

//Import pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Write from "./pages/Write";

//Import components
import Header from "./components/Header"
import Footer from "./components/Footer"

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/single",
        element: <Single/>
      },
      {
        path: "/write",
        element: <Write/>
      },
    ]
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  },
])

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
