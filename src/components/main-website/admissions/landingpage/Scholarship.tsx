import React, { useState } from 'react';

// Define the scholarship structure
interface Scholarship {
  name: string;
  eligibility: string;
  scholarshipDetails: { range: string; discount: string }[];
}

// Define scholarship data array
const scholarships: Scholarship[] = [
  {
    name: 'Chancellor’s Scholarship Scheme (After 10+2)',
    eligibility: 'Based on marks obtained in 12th class or equivalent examination.',
    scholarshipDetails: [
      { range: '75% - 80.99%', discount: '10%' },
      { range: '81% - 85.99%', discount: '25%' },
      { range: '86% - 90.99%', discount: '50%' },
      { range: '91% and above', discount: '100%' },
    ],
  },
  {
    name: 'Chancellor’s Scholarship Scheme (For Subsequent Years)',
    eligibility: 'Based on CGPA achieved in the previous academic year.',
    scholarshipDetails: [
      { range: '8.6 - 8.8', discount: '20%' },
      { range: '8.81 - 9.0', discount: '40%' },
      { range: '9.01 - 9.29', discount: '50%' },
      { range: '9.3 and above', discount: '100%' },
    ],
  },
  {
    name: 'Scholarship for Sports Persons',
    eligibility: 'Based on sports achievements.',
    scholarshipDetails: [
      { range: 'International', discount: '100%' },
      { range: 'National', discount: '100%' },
      { range: 'State', discount: '75%' },
      { range: 'District', discount: '25%' },
    ],
  },
  {
    name: 'Scholarship for Defence Quota',
    eligibility: 'Children of serving or ex-servicemen.',
    scholarshipDetails: [
      { range: 'Defence', discount: '20%' },
    ],
  },
  {
    name: 'Scholarship for Girls’ Quota',
    eligibility: 'Female candidates.',
    scholarshipDetails: [
      { range: 'Girls', discount: '10%' },
    ],
  },
  {
    name: 'Scholarship for Physically Disabled Students',
    eligibility: 'Physically handicapped students with medical proof.',
    scholarshipDetails: [
      { range: 'Disability', discount: '10%' },
    ],
  },
  {
    name: 'Scholarship for Aptitude Test Pass Outs',
    eligibility: 'Based on performance in the university’s aptitude test.',
    scholarshipDetails: [
      { range: '1st Winner', discount: '25%' },
      { range: '2nd Winner', discount: '20%' },
      { range: '3rd Winner', discount: '15%' },
    ],
  },
  {
    name: 'Sukanya Shiksha Yojna',
    eligibility: 'Female candidates with a minimum of 60% marks in 12th standard and family income not exceeding ₹2 Lakhs per annum.',
    scholarshipDetails: [
      { range: 'Sukanya Yojna', discount: 'Varies (Terms Apply)' },
    ],
  },
];

// Dynamic title and content data
const content = {
  title: 'Available Scholarships at Sanskriti University',
  description: 'Several Sanskriti University scholarships are provided to the students on the basis of marks/CGPA obtained. For example, BTech applicants can get scholarships based on class 12 marks. For MBA students, Sanskriti University offers scholarships based on CAT and MAT scores. Students interested in knowing more about different Sanskriti University scholarships can check the tables below.',
};

const Scholarship: React.FC = () => {
  // State for toggling "View More"
  const [showAll, setShowAll] = useState(false);

  const toggleView = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="px-4 sm:px-8">
      <div className="w-full shadow-md mt-8 p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {content.title}
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          {content.description}
        </p>

        {scholarships.slice(0, showAll ? scholarships.length : 1).map((scholarship, index) => (
          <div key={index} className="border p-2 sm:p-6">
            <h2 className="text-xl font-semibold mb-2">{scholarship.name}</h2>
            <p className="text-gray-700 mb-4">{scholarship.eligibility}</p>
            <table className="w-full table-auto border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 text-left">Marks Range</th>
                  <th className="py-2 px-4 text-left">Scholarship Percentage</th>
                </tr>
              </thead>
              <tbody>
                {scholarship.scholarshipDetails.map((detail, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50`}>
                    <td className="py-2 px-4">{detail.range}</td>
                    <td className="py-2 px-4">{detail.discount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        <button onClick={toggleView} className="text-blue-500 mt-4">
          {showAll ? 'View Less' : 'View More'}
        </button>
      </div>
    </div>
  );
};

export default Scholarship;
