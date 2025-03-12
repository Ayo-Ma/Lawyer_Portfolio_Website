import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/Testimonial.css";
import { useState, useEffect } from "react";
import Image from '../LexElite Assets/images/scale of justice.webp'

const Testimonials = () => {
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const Data = await fetch("/testimonials.json");
        const jsonData = await Data.json();
        console.log(jsonData)
        setTestimonials(jsonData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTestimonials();
  }, []);

  const [testimonials, setTestimonials] = useState([]);
  return (
    <div
      className="testimonial-container"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.78),rgba(0, 0, 0, 0.83)), url(${Image})` }}/* don't forget background imae here */
    >
      <h2 className="testimonial-title">Testimonials</h2>
      <p className="testimonial-subtitle">What Our Clients Say About Us</p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="testimonial-swiper"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <h3 className="testimonial-name">{t.name}</h3>
            <p className="testimonial-role">{t.role}</p>
            <div className="testimonial-rating">{"⭐".repeat(t.rating)}</div>
            <p className="testimonial-quote">"{t.quote}"</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
