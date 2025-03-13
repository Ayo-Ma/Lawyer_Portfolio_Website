import "../css/Blog.css";
import BlogCard from "./BlogCard";
import { useState, useEffect } from "react";
const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      const response = await fetch("/blog.json");
      const blogData = await response.json();
      setBlogs(blogData);
    };

    fetchBlogData();
  }, []);

  return (
    <section className="blog-list" id="blog">
      <div className="blog-list-text">
        <p>Blogs</p>
        <h2>Insights & Legal Trends</h2>
      </div>
      <div className="blog-container">
        {blogs.map((blogs, index) => (
          <BlogCard
            key={index}
            tag={blogs.tags}
            title={blogs.title}
            description={blogs.description}
            links={blogs.link}
            image = {blogs.image}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogList;
