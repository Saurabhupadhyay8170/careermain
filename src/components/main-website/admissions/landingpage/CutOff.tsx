import React, { useState } from "react";

interface CutoffItem {
  title: string;
  description: string;
}

const CutOff: React.FC = () => {
  // Define your dynamic data as an object inside the component
  const cutoffData: CutoffItem[] = [
    {
      title: "Sanskriti University Cut Off",
      description:
        "Sanskriti University cutoff is not released for any courses as admissions are done based on merit with the candidate's performance on the entrance exam and previous academic achievements being taken into account. The university holds all the rights to accept or reject a candidate based on their academics and scores. While calling candidates for counselling on the Sanskriti University campus, the university evaluates their performance and creates a merit list. As the Sanskriti University cut off is not made available, students are then informed about their selection and then they have to complete the admission formalities respectively. ",
    }
  ];
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="px-4 sm:px-8 mt-4 bg-[#EDEDE9]">
      {/* Section */}
      <div className="shadow-md p-4 mb-8">
        {cutoffData.map((aboutItem, index) => (
          <div key={index}>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{aboutItem.title}</h2>
            <p
              className="text-gray-700 text-lg"
              dangerouslySetInnerHTML={{
                __html: isExpanded
                  ? aboutItem.description
                  : `${aboutItem.description.slice(0, 495)}...`,
              }}
            />
            <button
              onClick={toggleReadMore}
              className="text-blue-500 font-semibold mt-2"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CutOff