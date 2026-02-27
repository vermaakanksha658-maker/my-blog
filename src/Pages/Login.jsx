import axios from 'axios'
import React, { useState } from 'react'
import Header from '../Component/Header'
import "../index.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../Redux/CounterSlice'
import Footer from "../Component/Footer"

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async function (e) {
    e.preventDefault()
    const res = await axios.post("http://localhost:4000/login", { email, password })
    console.log(res.data)
    if (res.data.user) {
      dispatch(login({
        user: res.data.user,
        token: res.data.token
      }));

      navigate("/home")
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className='login'>

          <h1 className='d-flex justify-content-center mb-3 mt-3'>WELCOME BACK</h1>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>

          <button type="submit" className="btn btn-primary">Login</button>

          <div className="row ms-0  me-0">
            <small className='mb-3 mt-3'>Don't have an account? <Link to="/register">Register</Link> </small>
            <Link to="/home" className="btn btn-primary" type="submit">Back</Link>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Login
