import React, { useState } from "react";



type AboutData = {
  title: string;
  description: string;
};

const aboutData: AboutData[] = [
  {
    title: "Sanskriti University Admission 2025",
    description:
      "Sanskriti University admissions are ongoing. To get admission, candidates must have to meet the minimum eligibility criteria set by the university for various offered courses. The university accepts various entrance exams for admission such as CUET UG, JEE Main, CUET PG, Sanskriti University National Admission Test (SUNAT), MAT, CAT, XAT, NMAT, etc. For admission to the UG courses, candidates must have passed class 12 from a recognised board with a minimum of 45% marks in the relevant stream. Entrance exams like CUET, UG, JEE Main, NEET UG are accepted for admission to the UG courses. To become eligible for the PG courses, candidates must have a graduate degree in the relevant stream from a recognised university. Entrance exams like CUET PG, SUNAT, MAT/ CAT, NMAT, XAT, and NAT are accepted by the university for PG admission at Sanskriti University. <br/> <br/>Various scholarships are also offered to the candidates based on their merit, economic background and more. There are a total of 26 courses offered by the university in different specialisations. To apply for admission to the offered courses, candidates must apply online through the official website or you can also visit the admission office of the university to submit the duly filled application form in offline mode."
  },
];


const AdmissionProcess: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // Toggle visibility of the course list
  const toggleView = () => setShowAll(!showAll);


  return (
    <div className="px-4 sm:px-8 bg-[#EDEDE9] mt-4">
      <div className="w-full shadow-md mt-8 p-4">
        {aboutData.map((aboutItem, index) => (
          <div key={index}>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{aboutItem.title}</h2>
            <p
              className="text-gray-700 text-lg"
              dangerouslySetInnerHTML={{
                __html: showAll
                ? aboutItem.description
                : `${aboutItem.description.slice(0, 495)}...`,
              }}
            />
          </div>
        ))}


        {/* View More/View Less Button */}
        <div className="mt-4">
          <button
            onClick={toggleView}
            className="text-blue-500 font-semibold mt-2"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;
