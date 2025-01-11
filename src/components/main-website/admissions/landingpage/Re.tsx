import React, { useEffect, useState } from "react";

type Rating = {
  stars: number;
  percentage: number;
};

type CategoryRating = {
  category: string;
  rating: number;
  reviews: number;
};

const Re: React.FC = () => {
  const [universityData, setUniversityData] = useState<{
    universityName: string;
    averageRating: number;
    totalReviews: number;
    ratings: Rating[];
    categoryRatings: CategoryRating[];
  } | null>(null);

  const [loading, setLoading] = useState(true);

  // Simulate API call
  useEffect(() => {
    const fetchUniversityData = async () => {
      setLoading(true);
      const data = {
        universityName: "Sanskriti University",
        averageRating: 4.7,
        totalReviews: 168,
        ratings: [
          { stars: 5, percentage: 83 },
          { stars: 4, percentage: 11 },
          { stars: 3, percentage: 2 },
          { stars: 2, percentage: 1 },
          { stars: 1, percentage: 3 },
        ],
        categoryRatings: [
          { category: "Overall", rating: 4.7, reviews: 168 },
          { category: "Infrastructure", rating: 4.4, reviews: 72 },
          { category: "Faculty", rating: 4.2, reviews: 74 },
          { category: "Placement", rating: 4.1, reviews: 73 },
          { category: "Hostel", rating: 4.2, reviews: 71 },
        ],
      };
      setTimeout(() => {
        setUniversityData(data);
        setLoading(false);
      }, 1000);
    };

    fetchUniversityData();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!universityData) {
    return <div className="text-center py-10">No data available.</div>;
  }

  const { universityName, averageRating, totalReviews, ratings, categoryRatings } =
    universityData;

  return (
    <div className="px-4 sm:px-8 mt-4">
      <div className="container mx-auto bg-gradient-to-b from-purple-300 via-white to-purple-200 rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          {universityName} Reviews
        </h1>

        {/* Average Rating Section */}
        <div className="flex flex-col sm:flex-row justify-around items-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center max-w-sm">
            <h2 className="text-5xl font-bold text-yellow-500">{averageRating}</h2>
            <p className="text-gray-600 text-lg mt-2">Average Rating</p>
            <p className="text-sm text-gray-500">{totalReviews} Reviews</p>
            <div className="flex justify-center mt-3">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`text-2xl ${
                    index < Math.floor(averageRating) ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Star Ratings */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Ratings Breakdown</h3>
          {ratings.map((rating, index) => (
            <div key={index} className="flex items-center mb-4">
              <div className="flex items-center w-1/3">
                <span className="text-lg text-yellow-500">{rating.stars}★</span>
              </div>
              <div className="w-2/3">
                <div className="relative w-full h-3 bg-gray-200 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-3 bg-yellow-500 rounded-full"
                    style={{ width: `${rating.percentage}%` }}
                  ></div>
                </div>
              </div>
              <span className="ml-4 text-sm text-gray-600">{rating.percentage}%</span>
            </div>
          ))}
        </div>

        {/* Category Ratings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryRatings.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-pink-100 to-pink-50 rounded-lg shadow-md p-4 text-center flex flex-col items-center"
            >
              <p className="text-lg font-semibold text-gray-800">{category.category}</p>
              <span className="text-3xl font-bold text-yellow-500 mt-2">
                {category.rating}★
              </span>
              <p className="text-sm text-gray-500 mt-1">({category.reviews} Reviews)</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Re;
