import React from 'react'
import { Link } from 'react-router-dom'

function nav() {
  return (
    <div className='container-fluid mt-4 bg-dark text-light' >
      <div className="row text-center text-md-start">
        <div className="col-md-5 col-6 mb-3 mt-3">
          <h4 className='mb-3'>QuickBlog</h4>
          <p style={{ padding: "5px" }}> The QuickBlog is a simple  and user - friendly blogging platform <br /> where
            people can share their thoughts , ideas , and experiences<br /> without any complexity .</p>
        </div>
        <div className="col-md-2 col-6 mt-3 mb-3">
          <h4 className='mb-3'>Categories</h4>
          <Link to="/allblogs" className='nav-link mt-2 '>Technology</Link>
          <Link to="/allblogs" className='nav-link mt-2'>Health</Link>
          <Link to="/allblogs" className='nav-link mt-2'>Education</Link>
          <Link to="/allblogs" className='nav-link mt-2'>Lifestyle</Link>
          <Link to="/allblogs" className='nav-link mt-2'>Travel</Link>
          <Link to="/allblogs" className='nav-link mt-2'>Food</Link>
        </div>
        <div className="col-md-2 col-6 mt-3 mb-3">
          <h4 className='mb-3'>Quick Links</h4>
          <Link className="nav-link mt-2" to="/"> Home</Link>
          <Link className="nav-link mt-2" to="/about">About</Link>
          <Link className="nav-link mt-2" to="/manage">Manage</Link>
          <Link className="nav-link mt-2" to="/allblogs">All Blogs</Link>
          <Link className="nav-link mt-2" to="/create">Create</Link>
        </div>
        <div className="col-md-3 col-6 mt-3  mb-3">
          <h4 className='mb-3'>Follow Us</h4>
          <p><i className="fa-brands fa-square-instagram" style={{ color: "#ea2099ff", marginRight: "8px" }}></i>Instagram</p>
          <p><i className='fa-brands fa-square-twitter' style={{ color: "#3120eaff", marginRight: "8px" }}></i>Twitter</p>
          <p><i className='fa-brands fa-square-linkedin' style={{ color: "#3120eaff", marginRight: "8px" }}></i>LinkedIn</p>
        </div>
      </div>
      <hr className="border-secondary mx-4" />
      <p className='text-center'>Copyright 2025 © QuickBlog -All Right Deserved</p>
    </div>
  )
}

export default nav
