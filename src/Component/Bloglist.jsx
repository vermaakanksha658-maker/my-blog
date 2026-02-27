
import React, { useState } from 'react'
import BlogCard from './BlogCard';

function Bloglist({ blogs ,showcategory=false}) {

  const [menu, setMenu] = useState("All")
  const categories = ["All","Technology","Education","Health","Lifestyle","Travel","Food"];
  const filteredBlogs = blogs.filter(
  (blog) => menu === "All" || blog.category === menu
);

 return (
    <div>
      <div>
        {showcategory &&(
        <div className="d-flex justify-content-center gap-2 flex-wrap mt-3">
          {categories.map((category) => (
            <button onClick={() => setMenu(category)} key={category} className="btn btn-primary btn-sm">{category}</button>
        ))}
        </div>)}
      </div>
      <div>
        <div className="container mt-4">
          <div className='row'>
            {filteredBlogs.map((blog) => (
              <div className='col-md-4 col-sm-6 mb-4' key={blog._id}>
                <BlogCard
                  id={blog._id}
                  image={blog.image}
                  title={blog.title}
                  description={blog.description}
                  category={blog.category}
                  />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bloglist
