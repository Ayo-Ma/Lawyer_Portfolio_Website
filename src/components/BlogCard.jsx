import '../css/blog-card.css'
import BlogImage from '../LexElite Assets/images/me.webp'
const BlogCard = (props) => {
  return (
    <div className="blog-card">
      <img loading="lazy" src={props.image} alt="" className="blog-image" />
      <div className="blog-text">
        <p className="blog-tag">{props.tag}</p>
        <div className="blog-text-content">
          <div className="blog-text-and-supporting-text">
            <h2>{props.title}</h2>
            <p>{props.description}
            </p>
          </div>
          <a className='blog-link' href={props.links} target='_blank'>Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
