import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ id, image, title, description, category, onDelete, showAction = false ,showReadMore=true}) {

  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]*>?/gm, "").replace(/&nbsp;/g, " ");
  };

  return (
    <div className="card mb-3">

      <div className="card-body">
        <img src={image} style={{ height: "200px", width: "100%", objectFit: "contain" }} />

        <span className="badge bg-primary mt-2 mb-2">{category}</span>

        <h5 className="card-title">{stripHtml(title)}</h5>

        <p className="card-text">{stripHtml(description).slice(0, 80)}</p>

        {showReadMore&& (
            <Link className="nav-link text-primary"to={`/blogs/${id}`}>Read more</Link>
          )}
          
        {showAction && (<div style={{
          display: "flex",
          justifyContent: "space-between"
        }}>
          <Link className="btn btn-primary" to={`/edit/${id}`}>Edit</Link>
          <button type="button" className="btn btn-primary" onClick={() => onDelete(id)}> Delete</button>
        </div>
        )}
      </div>
    </div>
  );
}

export default BlogCard;
