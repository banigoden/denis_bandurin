import React from "react";
import { useParams, Link } from "react-router-dom";
import { BlogList } from "../helpers/BlogList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../styles/BlogPostDisplay.css";

function BlogPostDisplay() {
  const { id } = useParams();
  const post = BlogList.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="blog-post">
        <h1>Post not found</h1>
        <Link to="/blog">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="blog-post">
      <Link to="/blog" className="back-to-blog">
        <ArrowBackIcon /> Back to Blog
      </Link>
      
      <div className="blog-post-header">
        <div className="blog-post-breadcrumb">
          <Link to="/">Home</Link> / <Link to="/blog">Blog</Link> / {post.title}
        </div>
        <h1 className="blog-post-title">{post.title}</h1>
        <div className="blog-post-meta">
          <span className="blog-post-category">{post.category}</span>
          <span className="blog-post-date">{post.date}</span>
        </div>
      </div>

      <div className="blog-post-content">
        {post.sections.map((section, idx) => (
          <div key={idx} className="blog-section">
            <h2 className="blog-section-title">{section.title}</h2>
            <p className="blog-section-description">{section.description}</p>
            <ul className="blog-section-features">
              {section.features.map((feature, featureIdx) => (
                <li key={featureIdx} className="blog-feature-item">
                  <span className="feature-icon">▸</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="blog-results">
          <h2 className="results-title">Results Achieved</h2>
          
          <div className="results-grid">
            <div className="results-category">
              <h3 className="results-category-title">Operational Excellence</h3>
              <div className="results-list">
                {post.results.operationalExcellence.map((result, idx) => (
                  <div key={idx} className="result-item">
                    <span className="result-check">✓</span>
                    <div className="result-content">
                      <strong className="result-metric">{result.metric}</strong>
                      <span className="result-description"> - {result.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="results-category">
              <h3 className="results-category-title">ML Operations</h3>
              <div className="results-list">
                {post.results.mlOperations.map((result, idx) => (
                  <div key={idx} className="result-item">
                    <span className="result-check">✓</span>
                    <div className="result-content">
                      <strong className="result-metric">{result.metric}</strong>
                      <span className="result-description"> - {result.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPostDisplay;

