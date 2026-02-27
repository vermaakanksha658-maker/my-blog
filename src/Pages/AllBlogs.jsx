import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import Bloglist from '../Component/Bloglist'
import Footer from '../Component/Footer'
import axios from 'axios';

function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/get-blog").then((res) => {
      setBlogs(res.data);
    });
  }, []);
  return (
    <div>
      <Header />
      <div className='container mt-4'>
        <Bloglist blogs={blogs} showcategory={true}/>
        
      </div>
      <Footer/>
    </div>
  )
}

export default AllBlogs
