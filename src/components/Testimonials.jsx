import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="carousel">
        <div className="carousel-item">
          <img src="testimonial-1.jpg" alt="Testimonial 1" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="carousel-item">
          <img src="testimonial-2.jpg" alt="Testimonial 2" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;