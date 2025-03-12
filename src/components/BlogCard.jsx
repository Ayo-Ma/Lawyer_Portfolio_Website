import '../css/blog-card.css'
import BlogImage from '../LexElite Assets/images/me.jpg'
const BlogCard = (props) => {
  return (
    <div className="blog-card">
      <img src={BlogImage} alt="" className="blog-image" />
      <div className="blog-text">
        <p className="blog-tag">{props.tag}</p>
        <div className="blog-text-content">
          <div className="blog-text-and-supporting-text">
            <h2>{props.title}</h2>
            <p>{props.description}
            </p>
          </div>
          <a className='blog-link' href="#">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
