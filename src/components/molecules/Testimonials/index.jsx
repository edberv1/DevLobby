import React, { useEffect, useRef } from "react";
import Testimonial from "../../atoms/Testimonial";
import testimonialsData from "../../atoms/Testimonial/testimonialData";
import "./Testimonials.scss";

const Testimonials = () => {
  const containerRef = useRef();

  useEffect(() => {
    const scrollWidth = containerRef.current.scrollWidth;
    const animationDuration = scrollWidth / 100;

    const keyframes = [
      { transform: "translateX(0)" },
      { transform: `translateX(-${scrollWidth}px)` },
    ];

    const options = {
      duration: animationDuration * 1000,
      iterations: Infinity,
    };

    containerRef.current.animate(keyframes, options);
  }, []);
  return (
    <div className="testimonials-section">
      <div className="rating-badge">
        <div className="star-container">
          <span className="star-icon">★</span>
        </div>
        <span className="rating-text">Rated 4/5 by developers</span>
      </div>

      <h1 className="testimonials-title">
        Words of Praise from others about our presence
      </h1>
      <div className="testimonials-wrapper">
        <div className="testimonials-container" ref={containerRef}>
          {testimonialsData.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
