import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Manage from './Pages/Manage'
import Create from './Pages/Create'
import Blogs from './Pages/Blogs'
import Edit from './Pages/Edit'
import AllBlogs from './Pages/AllBlogs'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/allblogs" element={<AllBlogs/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/manage" element={<Manage/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/blogs/:id" element={<Blogs/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
