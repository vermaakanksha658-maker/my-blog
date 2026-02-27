import React, { useState } from "react";
import axios from "axios";
import Header from "../Component/Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Create() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.counter.user);
  const [formData , setFormData]=useState({image: "",title: "",description: "",category: "",})

  function handletitleChange(value) {
   setFormData({
  ...formData,
  title: value,
});
}

function handledescriptionChange(value) {
     setFormData({
  ...formData,
  description: value,
});
}

function handleChange(e) {
  const name = e.target.name;  
  const value = e.target.value;   

  setFormData({
  ...formData,
  [name]: value,
});
}

const handleSubmit = async (e) => {
    e.preventDefault();

    const token = sessionStorage.getItem("token");

  console.log("TOKEN:", token);     
  console.log("USER:", user);      
  console.log("FORM DATA:", formData);

    await axios.post("http://localhost:4000/create-blog", { ...formData, author: user._id, },{
      headers: {Authorization: `Bearer ${token}`,},
    });
    navigate("/home");
  };
  
return (
    <div>
      <Header />
      <div className="login">
        <h2>Create Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Image URL</label>
            <input type="text" className="form-control" placeholder="Paste image URL here" name="image" value={formData.image} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label>Title</label>
            <ReactQuill type="text" className="form-control" name="title" value={formData.title} onChange={handletitleChange} />
          </div>
          <div className="mb-3">
            <label>Description</label>
            <ReactQuill className="form-control" rows="5" name="description"value={formData.description} onChange={handledescriptionChange}/>
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
          <button type="submit" className="btn btn-primary">Create Blog</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Create;
