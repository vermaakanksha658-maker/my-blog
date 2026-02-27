import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Component/Header";
import BlogCard from "../Component/BlogCard";
import { useSelector } from "react-redux";
import Footer from "../Component/Footer";

function Manage() {
  const [blogs, setBlogs] = useState([]);
  const user = useSelector((state) => state.counter.user);

  useEffect(() => {
    if (!user) {
      setBlogs([]);
      return;
    }
    axios.get("http://localhost:4000/get-blog").then((res) => {
      const myBlogs = res.data.filter(
        (blog) => blog.author === user._id
      );
      setBlogs(myBlogs);
    });
  }, [user]);

  const deleteBlog = async (id) => {
    await axios.delete(`http://localhost:4000/delete-blog/${id}`);
    alert("Blog deleted");
    window.location.reload();
  }
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-md-4 col-sm-6 mb-4" key={blog._id}>
              <BlogCard
                id={blog._id}
                title={blog.title}
                image={blog.image}
                description={blog.description}
                onDelete={deleteBlog}
                showAction={true}
                category={blog.category}
                showReadMore={true}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Manage;
