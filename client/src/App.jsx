import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Router
} from "react-router-dom";
import './App.css'

//Import pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Write from "./pages/Write";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/single",
    element: <Single/>
  },
  {
    path: "/write",
    element: <Write/>
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
