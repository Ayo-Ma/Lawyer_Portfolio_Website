import '../css/hero.css';
import '../css/btn.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>I Provide Expert Legal Solutions for Your Peace of Mind.</h1>
        <p>Trusted legal expertise to protect your rights and interests with integrity</p>
      </div>
      <div className="hero-btn">
        <a href="#" className="btn btn-secondary">Case Studies</a>
        <a href="#" className="btn btn-primary">Legal Services</a>
      </div>
    </section>
  );
};

export default Hero;
