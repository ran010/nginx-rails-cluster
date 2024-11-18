import React from 'react';
import Slider from 'react-slick';

const ImageCarousel = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false
  };

  const images = ['https://lh4.googleusercontent.com/proxy/a6RVro2pkldbcm3XHDggiAQEXGl-dt2ul6PZCXOPWvMCgFSUjmG72DI4XDnfKGIzcWjDyfhlM4UrXUJWbZED2b4ovydXdQzA', 'https://lp-cms-production.imgix.net/2021-12/Annapurna-Circuit-Nepal.jpg']

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className="w-full h-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
