
import React from 'react';
import { Link } from 'react-router-dom';

const FinderContent: React.FC = () => {
  return (
    <section className="w-full py-16 #EDEDE9">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Find Your Ideal College with Ease
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Discover top colleges based on your qualifications, budget, and preferences. Start your journey to success now!
          </p>
        </div>

        {/* Section Content with Image and Cards */}
        <div className="flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0">
          {/* Left Card (Without Filter) */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg max-w-xs mx-auto md:mx-0">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Explore Colleges Based on Your Qualifications
            </h3>
            <p className="text-gray-600 mb-4">
              Explore a wide range of colleges suitable for your qualifications. Whether you're a high school graduate or a degree holder, we have options tailored for you.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              <Link to={'/CollegeFinder'}>Learn More</Link>
            </a>
          </div>

          {/* Image */}
          <div className="flex-1 w-full md:w-[40%] max-w-sm mx-auto md:mx-0">
            <img
              src="./logo/clg.jpg"
              alt="College Finder"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Card */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg max-w-xs mx-auto md:mx-0">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Budget-Friendly College Options
            </h3>
            <p className="text-gray-600 mb-4">
            Choose colleges that fit within your budget, qualification, and location. Explore scholarships, financial aid, and cost-effective options to make an informed decision.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              <Link to={'/CollegeFinder'}>Learn More</Link>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinderContent;