import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from "../Component/Footer"
import { useSelector } from 'react-redux';

function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({ image: "", title: "", description: "", category: "", });
  const user = useSelector((state) => state.counter.user);


  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]*>?/gm, "").replace(/&nbsp;/g, " ");
  };

  const getblog = async () => {
    const res = await axios.get(`http://localhost:4000/get-blog/${id}`);
    setFormData({
      image: res.data.image,
      title: stripHtml(res.data.title),
      category: res.data.category,
      description: stripHtml(res.data.description),
    })
  };

  function handleChange(e) {

    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  useEffect(() => {
    if (id) {
      getblog();
    }
  }, []);

  const handleSubmit = async (e) => {

    e.preventDefault();

    const token = sessionStorage.getItem("token");

  console.log("TOKEN:", token);     
  console.log("USER:", user);      
  console.log("FORM DATA:", formData);

    await axios.put(`http://localhost:4000/edit-blog/${id}`, { ...formData },{
      headers: {Authorization: `Bearer ${token}`,},
    })
    navigate("/manage")
    
  };

  return (
    <div>
      <Header />
      <div className="login">

        <h2>Update Blog</h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label>Image URL</label>
            <input type="text" className="form-control" placeholder="Paste image URL here" name="image" value={formData.image} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label>Title</label>
            <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label>Description</label>
            <textarea className="form-control" rows="5" name="description" value={formData.description} onChange={handleChange}></textarea>
          </div>

          <div className="mb-3">

            <label>Category</label>
            <select className="form-control" name="category" value={formData.category} onChange={handleChange} required>
              <option value="">Select category</option>
              <option value="Technology">Technology</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Travel">Travel</option>
              <option value="Food">Food</option>
            </select>

          </div>

          <button type="submit" className="btn btn-primary">Edit Blog</button>

        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Edit 