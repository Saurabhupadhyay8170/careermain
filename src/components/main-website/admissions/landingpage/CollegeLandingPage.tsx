import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const CollegeLandingPage: React.FC = () => {
  const universityData = {
    logo:"https://upload.wikimedia.org/wikipedia/en/a/a9/Sanskriti_University_logo.png",
    name: "Sanskriti University - Admission 2025, Fees, Courses, Placement, Ranking",
    rating: 4.7,
    reviews: 168,
    isPopular: true,
    establishmentYear: 2016,
    type: "Private",
    highestPackage: "42 Lacs",
    location: "Mathura (Uttar Pradesh)",
    description:
      "Sanskriti University admission 2025 is ongoing for UG, PG, and PhD courses. For MBA admission, CAT 2024 will be conducted on November 24, 2024. For UG courses, the CUET UG 2025 application is expected to be released by the last week of February 2025. The university offers a total of 28 courses. Sanskriti University fees range between Rs 30,000 - Rs 1,70,000 per year.",
    image: "./logo/Sanskriti-University.avif",
    gallery: [
      "https://www.sanskriti.edu.in/images/about.jpg",
      "https://www.sanskriti.edu.in/images/faculty.jpg",
      "https://image-static.collegedunia.com/public/college_data/images/appImage/14987369191475561187cover.jpg?h=260&w=360&mode=crop",
      "https://colleges18.s3.ap-south-1.amazonaws.com/Sanskriti_University_Mathura_3_c6e1350a2a.jpg",
      "https://content3.jdmagicbox.com/comp/mathura/l9/9999px565.x565.130209104626.n1l9/catalogue/sanskriti-university-chhata-mathura-universities-1onkfjahrs.jpg",
    ],
  };

  const [isGalleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = () => setGalleryOpen(true);
  const closeGallery = () => setGalleryOpen(false);

  const goToNextImage = () => {
    setCurrentImageIndex(
      (currentImageIndex + 1) % universityData.gallery.length
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + universityData.gallery.length) %
        universityData.gallery.length
    );
  };

  return (
    <>
      <div className="bg-[#EDEDE9] p-4 sm:p-8">
        <div className="bg-[#EDEDE9] rounded-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            {/* Left Section - Content */}
            <div className="w-full lg:w-2/3 p-4 sm:p-6">
              <div className="flex items-center mb-4">
                <img
                  src={universityData.logo}
                  alt="University Logo"
                  className="w-16 h-16 lg:w-12 lg:h-12 rounded-full mr-4"
                />
                <h1 className="text-xl lg:text-2xl font-bold text-gray-800">
                  {universityData.name}
                </h1>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <span className="text-yellow-500 font-bold text-lg">
                  {universityData.rating}★
                </span>
                <span className="ml-2">({universityData.reviews} Reviews)</span>
                {universityData.isPopular && (
                  <span className="ml-4 px-2 py-1 text-sm bg-blue-100 text-blue-600 rounded">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-gray-700 mb-6">{universityData.description}</p>
              <div className="flex items-center space-x-6 mb-6">
                <span className="text-gray-600 flex">
                  <FaMapMarkerAlt className="mr-2 text-blue-600" />
                  {universityData.location}
                </span>
                {/* Gallery link */}
                <button
                  onClick={openGallery}
                  className="text-blue-600 underline focus:outline-none"
                >
                  Gallery
                </button>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100 w-full sm:w-auto">
                  Download Brochure
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full sm:w-auto">
                  Apply Now
                </button>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="w-full lg:w-1/3 relative mt-7 flex justify-center items-center">
              <div>
              <img
                src={universityData.image}
                alt={universityData.name}
                className="w-full object-cover rounded-lg"
              />
              <div className="absolute top-4 left-1 sm:left-4 bg-white text-center p-2 rounded shadow">
                <p className="text-sm text-gray-600">Highest Package</p>
                <p className="text-sm sm:text-lg font-bold text-blue-600">
                  {universityData.highestPackage}
                </p>
              </div>
              <div className="absolute top-4 right-1 sm:right-4 bg-white text-center p-2 rounded shadow">
                <p className="text-sm text-gray-600">Year of Establishment</p>
                <p className="text-sm sm:text-lg font-bold text-blue-600">
                  {universityData.establishmentYear}
                </p>
              </div>
              <div className="absolute bottom-4 right-1 sm:right-4 bg-white text-center p-2 rounded shadow">
                <p className="text-sm text-gray-600">Type</p>
                <p className="text-sm sm:text-lg font-bold text-blue-600">
                  {universityData.type}
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Modal */}
        {isGalleryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-lg w-full">
              <button
                onClick={closeGallery}
                className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
              >
                &times;
              </button>
              <img
                src={universityData.gallery[currentImageIndex]}
                alt={`Gallery Image ${currentImageIndex + 1}`}
                className="w-full rounded-lg"
              />
              <div className="flex justify-between mt-4">
                <button
                  onClick={goToPreviousImage}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Previous
                </button>
                <button
                  onClick={goToNextImage}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CollegeLandingPage;
