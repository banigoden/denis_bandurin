import React from "react";
import { Link } from "react-router-dom";
import { BlogList } from "../helpers/BlogList";
import "../styles/Blog.css";

function Blog() {
  return (
    <div className="blog">
      <h1 className="blog-title">Blog</h1>
      <div className="blog-list">
        {BlogList.map((post, idx) => {
          return (
            <Link key={idx} to={`/blog/${post.id}`} className="blog-item">
              <div className="blog-item-content">
                <h2 className="blog-item-title">{post.title}</h2>
                <p className="blog-item-excerpt">{post.excerpt}</p>
                <div className="blog-item-meta">
                  <span className="blog-item-category">{post.category}</span>
                  <span className="blog-item-date">{post.date}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
