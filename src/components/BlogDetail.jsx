import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./styles.css";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("/blogs.json")
      .then((response) => response.json())
      .then((data) => {
        const foundBlog = data.find((b) => b.id === parseInt(id));
        setBlog(foundBlog);
      })
      .catch((error) => console.error("Error fetching blog:", error));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="blog-details">
      <h1>{blog.title}</h1>
      <p className="author">By {blog.author}</p>
      <img  loading="lazy"src={blog.image} alt={blog.title} className="blog-image" />
      <p className="content">{blog.content}</p>
      <Link to="/" className="back-home">Back to Blogs</Link>
    </div>
  );
};

export default BlogDetail;
