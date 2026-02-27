import React, { useState } from 'react'
import Header from '../Component/Header'
import "../index.css"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Footer from "../Component/Footer"

function Register() {

  const [formData, setFormData] = useState({ name: "", email: "", password: "", gender: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:4000/register", formData);

    if (res.data) {
      navigate("/login");
      console.log("Response:", res.data);
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className='login'>

          <h1 className='d-flex justify-content-center mt-3'>
            Welcome ! Create your account
          </h1>

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Gender</label><br />
            <input type="radio" name="gender" value="male" onChange={handleChange} /> Male
            <input type="radio" name="gender" value="female" className="ms-3" onChange={handleChange} /> Female
            <input type="radio" name="gender" value="other" className="ms-3" onChange={handleChange} /> Other
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} />
          </div>

          <button type="submit" className="btn btn-primary">Register</button>

          <small className='d-block mt-3'>Already have an account? <Link to="/login">Login</Link></small>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Register;
