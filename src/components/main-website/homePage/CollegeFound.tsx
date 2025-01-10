
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ContactForm } from "./Section5";

const CollegeFinder: React.FC = () => {
   const [showForm, setShowForm] = useState(false);
    
      const hideForm = () => {
        setShowForm(false);
      };
    
      const submitHandler = (values:any) => {
        console.log("Form Submitted", values);
        // Handle form submission here, like making an API call
      };
  return (
    <div className="bg-gradient-to-r mt-5 font-poppins from-[#983fd4] to-[#e46ab3] text-white py-16 px-8 lg:px-24 rounded-lg shadow-lg">
      <h2 className="text-4xl lg:text-5xl text-white font-semibold mb-6 text-center">
        Find Your Dream College
      </h2>
      <p className="text-lg lg:text-xl font-light text-center mb-12 max-w-3xl mx-auto">
        Take the first step towards your future by exploring a wide range of
        top-tier colleges. Compare programs, campuses, and opportunities to
        choose the one that perfectly aligns with your career goals and dreams.
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Left Card */}
        <div className="bg-white text-gray-900 rounded-lg shadow-md p-6 w-full lg:w-1/3 transform transition-transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-4 text-center">Explore Colleges</h3>
          <p className="text-base text-gray-700 mb-6 text-center">
            Discover detailed information about colleges, including their
            programs, campus life, rankings, and much more.
          </p>
          <Link to={'/admissions'}>
           <button className="bg-[#983fd4] hover:bg-[#e46ab3] text-white py-2 px-6 rounded-lg w-full">
             Explore Now
           </button>
          </Link>
        </div>

        {/* Center Button */}
        <div className="flex-shrink-0">
          <Link to={'/CollegeFinder'}>
           <button className="border-2 border-white px-8 text-white p-2 hover:bg-purple-700 transition-all duration-400 ease-in-out transform hover:scale-105  rounded-md hover:text-white text-[16px] font-semibold">
            Start College Finder
           </button>
          </Link>
        </div>

        {/* Right Card */}
        <div className="bg-white text-gray-900 rounded-lg shadow-md p-6 w-full lg:w-1/3 transform transition-transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-4 text-center">Career Guidance</h3>
          <p className="text-base text-gray-700 mb-6 text-center">
            Get personalized career advice to help you choose the best program
            and college to achieve your goals.
          </p>
          <div>
          <a
           onClick={() => setShowForm(true)}
            className="bg-[#983fd4] hover:bg-[#e46ab3] text-white py-2 px-6 rounded-lg w-full text-center block cursor-pointer"
          >
            Get Guidance
            
          </a>
          <ContactForm
            showForm={showForm}
            hideForm={hideForm}
            submitHandler={submitHandler}
            referFriend={false} 
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeFinder;