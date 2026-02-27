import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/CounterSlice";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.counter.user);
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand text-light" to="#">Quick Blog</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item"><Link className="nav-link active text-light" aria-current="page" to="/home">Home</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" to="/about">About</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" to="/allblogs"> All Blogs</Link></li>
                {user && (
                  <>
                    <li><Link className="nav-link text-light" to="/manage">Manage</Link></li>
                    <li><Link className="nav-link text-light" to="/create">Create</Link></li>
                  </>
                )}
              </ul>

              <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
                {!user ? (
                  <>
                    <li><Link className="nav-link text-light" to="/login">Login</Link></li>
                    <li><Link className="nav-link text-light" to="/register">Register</Link></li>
                  </>
                ) : (
                  <>
                    <li className="nav-item me-2"><span className="text-primary">{user.email} </span></li>
                    <li className="nav-item"><button className="btn nav-link text-light" onClick={() => dispatch(logout())}> Logout</button></li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header
