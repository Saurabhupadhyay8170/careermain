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

const ReviewComponent: React.FC = () => {
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
    // Replace this with an actual API call
    const fetchUniversityData = async () => {
      setLoading(true);
      // Simulated API response
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
      }, 1000); // Simulate network delay
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
    <div className="container shadow-md p-4 sm:p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{universityName} Reviews</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Average Rating */}
        <div className="col-span-1 bg-white shadow rounded-lg p-6 flex flex-col items-center">
          <h2 className="text-4xl font-bold text-gray-800">{averageRating}</h2>
          <div className="flex items-center my-2">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`text-xl ${index < Math.floor(averageRating) ? "text-yellow-500" : "text-gray-300"}`}
              >
                ★
              </span>
            ))}
          </div>
          <p className="text-gray-600">Rating ({totalReviews} Reviews)</p>
        </div>

        {/* Star Ratings */}
        <div className="col-span-1 md:col-span-2 bg-white shadow rounded-lg p-4 sm:px-6">
          {ratings.map((rating, index) => (
            <div key={index} className="flex items-center mb-3">
              <div className="flex items-center w-1/4">
                {[...Array(5)].map((_, starIndex) => (
                  <span
                    key={starIndex}
                    className={`text-sm ${starIndex < rating.stars ? "text-yellow-500" : "text-gray-300"}`}
                  >
                    ★
                  </span>
                ))}
                <span className="ml-2 text-sm text-gray-600">{rating.stars} Star Rating</span>
              </div>
              <div className="w-3/4">
                <div className="h-2 bg-gray-200 rounded-full relative">
                  <div
                    className="h-2 bg-yellow-500 rounded-full"
                    style={{ width: `${rating.percentage}%` }}
                  ></div>
                </div>
              </div>
              <span className="ml-2 text-sm text-gray-600">{rating.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Category Ratings */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
        {categoryRatings.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-4 text-center flex flex-col items-center"
          >
            <p className="text-gray-800 font-semibold">{category.category}</p>
            <button className="bg-yellow-500 px-2 rounded-md">{category.rating}★</button>
            <p className="text-gray-600">({category.reviews} Reviews)</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ReviewComponent;
