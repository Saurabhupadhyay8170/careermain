
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css'

interface CardProps {
  logoUrl: string;
  cardHeight: string;
  cardWidth: string;
}

interface UnivercitiesLogoSliderProps {
  showHeading?: boolean; 
  cardHeight?: string; 
  cardWidth?: string; 
  paddingClass?: string;
}

const Card: React.FC<CardProps> = ({ logoUrl, cardHeight, cardWidth }) => {
  return (
    <div className="p-5 pb-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="w-full flex justify-center items-center" style={{ height: cardHeight }}>
          <img
            className="max-w-full max-h-full object-contain"
            src={logoUrl}
            alt="Logo"
            style={{ width: cardWidth }}
          />
        </div>
      </div>
    </div>
  );
};


const UnivercitiesLogoSlider: React.FC<UnivercitiesLogoSliderProps> = ({
  showHeading = true, 
  cardHeight = "10rem", 
  cardWidth = "auto", 
  paddingClass = "py-10"
}) => {
  const cards = [
    { logoUrl: "./logo/Quantum_logo.png" },
    { logoUrl: "./logo/1631180032phpvUgTqj.jpeg" },
    { logoUrl: "./logo/images.png" },
    { logoUrl: "./logo/sandip.png" },
    { logoUrl: "./logo/Slide80.jpeg" },
  ];

  const sliderSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed:500,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: true,
    arrows:false,
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-4">
        <ul className="flex justify-center">{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className={`${paddingClass} bg-[#EDEDE9] relative`}>
      {showHeading && (
        <h2 className="text-center font-poppins mb-6 text-3xl">
          Top Ranked Institutes & Universities
        </h2>
      )}
      <div className="container mx-auto px-4 relative">
        <Slider {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index} 
            logoUrl={card.logoUrl} 
            cardHeight={cardHeight}
            cardWidth={cardWidth}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default UnivercitiesLogoSlider;