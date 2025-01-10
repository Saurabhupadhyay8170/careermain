
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UnivercitiesLogoSlider from "./UnivercitiesLogoSlider";
import { ContactForm } from "./Section5";

const Meeting: React.FC = () => {

  const [showForm, setShowForm] = useState(false);

  const hideForm = () => {
    setShowForm(false);
  };

  const submitHandler = (values:any) => {
    console.log("Form Submitted", values);
    // Handle form submission here, like making an API call
  };

  const sliderData = [
    "Which University aligns with my career goals? Ask Our Expert Counsellors.",
    "Unlock your potential with guidance from experienced counsellors.",
    "Your career journey starts here. Let us help you choose the right path.",
  ];

  return (
    <div className="bg-[#dfdfde] p-2 mt-5 md:p-10 font-poppins">
      {/* Top Heading */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-800">
          More than advice, it’s eye-to-eye insight!
        </h1>
      </div>

      {/* Slider Section */}
      <div className="my-5">
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={4000}
        >
           {sliderData.map((text, index) => (
          <div key={index} className="p-5 bg-[#1F618D] rounded-md">
            <p className="text-center text-lg md:text-xl text-white font-medium">
              {text}
            </p>
          </div>
        ))}
        </Slider>
      </div>

      {/* Content Section */}
      <div className="flex flex-col py-14 md:flex-row items-center justify-between gap-5">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-5">
          <h2 className="text-orange-600 font-semibold text-2xl md:text-2xl">
           Experience real conversations with no filters
          </h2>
          <p className="text-lg text-gray-700">
           Try our Video Counselling for free!
          </p>
          <div>
           <button onClick={() => setShowForm(true)} className="px-5 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600">
            BOOK NOW
           </button>
           <ContactForm
            showForm={showForm}
            hideForm={hideForm}
            submitHandler={submitHandler}
            referFriend={false} 
           />
          </div>
          <div className=" px-5" style={{overflow: "hidden"  }}>
        <div className="w-full">
          <UnivercitiesLogoSlider 
          showHeading={false} 
          cardHeight="5rem"  
          cardWidth="50%" 
          paddingClass=""
          />
        </div>
      </div>
        </div>

        {/* Right Image */}
        <div className="w-full h-[50vh] md:w-1/2 flex justify-center relative">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="./logo/meet.mp4" type="video/mp4" />
        </video>
        </div>
      </div>
      <div className="text-center text-gray-600">
        <p>Powered by Career Banao</p>
        <p>Upskilling India, One Career at a Time</p>
      </div>
    </div>
  );
};

export default Meeting;