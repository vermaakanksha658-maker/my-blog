import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Component/Header";
import Footer from "../Component/Footer"

function Blogs() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:4000/get-blog/${id}`)
      .then((res) => setBlog(res.data));
  }, [id]);
  if (!blog) {
    return <p className="text-center mt-5">Loading...</p>;
  }
  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="mb-3">
          <img src={blog.image} className="img" style={{ maxHeight: "500px", width: "100%", objectFit: "cover", }}/>
        </div>
        <span className="badge bg-primary mb-2">{blog.category}</span>
        <div
  className="mt-2 mb-3"
  dangerouslySetInnerHTML={{ __html: blog.title }}
/>

<div
  dangerouslySetInnerHTML={{ __html: blog.description }}
/>

        <button className="btn btn-outline-primary mt-4" onClick={() => navigate("/allblogs")}> Back</button>
      </div>
      <Footer/>
    </>
  );
}

export default Blogs;
