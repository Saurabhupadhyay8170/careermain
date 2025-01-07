import React, { useState } from "react";

type Course = {
  name: string;
  fees: string;
  duration: string;
};


const aboutData = [
  {
    title: "Sanskriti University Mathura Courses and Fees 2024",
    description:
      "Sanskriti University Mathura fees range from Rs 30000 to Rs 1,70,000 per year, depending on the degree level, duration and specialization of the course. The college offers 105 courses at Diploma, UG, PG and doctoral level. The university offers 12 courses in B.Tech, 11 courses in BSc at the UG level. At the PG level, the students can choose a wide range of specializations - 10 courses in MBA, 6 course in MSc. Admission to Sanskriti University Mathura courses ar done on merit basis and entrance basis. Scores of AILET, LSAT, NIMCET, MAT, CAT, CUET, JEE Main etc. are accepted by Sanskriti University Mathura for admission. ",
    feeStructureTitle: "Sanskriti University Mathura Fee Structure 2024",
  }
];

const courses: Course[] = [
  { name: "Diploma", fees: "Rs 42,000 - 90,000", duration: "2 - 3.6 Years" },
  { name: "D Pharma", fees: "Rs 1,00,000", duration: "2 Years" },
  { name: "B.Tech", fees: "Rs 1,30,000 - 1,50,000", duration: "4 Years" },
  { name: "BSc", fees: "Rs 45,000 - 1,25,000", duration: "3 - 4 Years" },
  { name: "BCA", fees: "Rs 80,000 - 1,10,000", duration: "3 Years" },
  { name: "BBA", fees: "Rs 80,000 - 1,00,000", duration: "3 Years" },
  { name: "BA", fees: "Rs 30,000 - 50,000", duration: "3 Years" },
  { name: "B.Pharm", fees: "Rs 1,25,000 - 1,35,000", duration: "4 Years" },
  { name: "B.Voc", fees: "Rs 75,000", duration: "3 Years" },
  { name: "B.Com", fees: "Rs 50,000 - 60,000", duration: "3 Years" },
];

const CourseFees: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // Toggle visibility of the course list
  const toggleView = () => setShowAll(!showAll);

  // Determine the courses to display (initially 5, or all when expanded)
  const visibleCourses = showAll ? courses : courses.slice(0, 5);

  return (
    <div className="px-4 sm:px-8 bg-[#EDEDE9] mt-4">
    <div className="w-full mt-8 p-4 shadow-md">
     {aboutData.map((aboutItem, index) => (
          <div key={index}>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{aboutItem.title}</h2>
            <p
              className="text-gray-700 text-lg"
              dangerouslySetInnerHTML={{
                __html: `${aboutItem.description}`,
              }}
            />
            <h1 className="text-2xl font-semibold text-gray-800 mb-6 pt-4">{aboutItem.feeStructureTitle}</h1>
          </div>
        ))}
      <div className="overflow-x-auto">
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-left">Course</th>
            <th className="py-2 px-4 text-left">Fees</th>
            <th className="py-2 px-4 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          {visibleCourses.map((course, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-blue-50`}
            >
              <td className="py-2 px-4">{course.name}</td>
              <td className="py-2 px-4">{course.fees}</td>
              <td className="py-2 px-4">{course.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

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

export default CourseFees;
