import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import Header2 from "../Component/Header2";
import Bloglist from "../Component/Bloglist";
import Footer from "../Component/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {

  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4000/get-blog").then((res) => {
      setBlogs(res.data);
    });
  }, []);
  
  const searchedBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description.toLowerCase().includes(search.toLowerCase())
  );

  const limitedBlogs = searchedBlogs.slice(0, 6);

return (
    <>
    <div>
      <Header />
      <Header2 setSearch={setSearch} />
      <Bloglist blogs={limitedBlogs} showcategory={false} />
      {searchedBlogs.length > 6 && (
        <div className="text-center mt-4">
          <button className="btn btn-outline-primary" onClick={() => navigate("/allblogs")}>  Load More</button>
        </div>
      )}
      <Footer />
      </div> 
    </>
  );
}

export default Home;
