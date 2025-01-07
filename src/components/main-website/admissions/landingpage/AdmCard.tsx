import React, { useState } from "react";
import { ContactForm } from "../../homePage/Section5";

const AdmCard: React.FC = () => {

  
  const [showForm, setShowForm] = useState(false);
    
      const hideForm = () => {
        setShowForm(false);
      };
    
      const submitHandler = (values:any) => {
        console.log("Form Submitted", values);
        // Handle form submission here, like making an API call
      };

  return (
    <div className="bg-pink-100 p-2 mx-4 sm:mx-8 mt-4 shadow-lg">
    <div className="flex flex-col md:flex-row items-center justify-between  border-4 border-purple-700 p-2 rounded-lg shadow-md mx-4 md:mx-8 my-4">
      {/* Text Section */}
      <div className="flex-1">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
          Are you eligible for admission to Sanskriti University?
        </h2>
        <p className="text-sm md:text-base text-gray-700 mb-4">
          Don’t let confusion hold you back! Get answers from our experts now.
        </p>
        <button
          onClick={() => setShowForm(true)}
          type="button"
          className="border-2 border-purple-700 px-8 text-gray-700 p-2 hover:bg-purple-700 transition-all duration-400 ease-in-out transform hover:scale-105  rounded-md hover:text-white text-[16px] font-semibold"
        >
          Get Free Expert Help
        </button>
        <ContactForm
          showForm={showForm}
          hideForm={hideForm}
          submitHandler={submitHandler}
          referFriend={false} 
        />
      </div>

      {/* Image Section */}
      <div className="mt-4 md:mt-0 md:ml-6">
        <img
          src="home-hero.svg"
          alt="Expert Help"
          className="w-48 md:w-60"
        />
      </div>
    </div>
    </div>
  );
};

export default AdmCard;
