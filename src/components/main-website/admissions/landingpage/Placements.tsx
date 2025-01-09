import React, { useState } from "react";

interface AboutItem {
  title: string;
  description: string;
}

const Placements: React.FC = () => {
  // Define dynamic data for the sections
  const aboutData: AboutItem[] = [
    {
      title: "Sanskriti University Placement 2023",
      description:
        "Sanskriti University placement 2023 has been conducted and more than 1013 students got placed in many top companies like Wipro, BYJUS, Coca Cola, Pidilite, Infosys, Canon, Havels etc. As per the Sanskriti University placement statistics 2023, 200+ organisations visited the campus for the placement drive.<br /><br />The authorities have highlighted that Sanskriti University highest package was Rs 54 LPA with a placement percentage of 85 percent. The average package offered during Sanskriti University placement 2023 was Rs 6.20 LPA. Companies such as LG, Hindustan Unilever Limited, Apollo, Radisson Blu, Emirates, Maruti Suzuki, Coca Cola, BYJU's, etc. visited the campus to hire eligible students to be a part of their organisations. As per the placement report of Sanskriti University, the overall placement percentage was 85 percent. Sanskriti University has also released the average package for Diploma courses and the amount stood at Rs 2.20 LPA.",
    },
    {
      title: "Sanskriti University Highest Package",
      description:
        "As per Sanskriti University 2023 the highest salary package is Rs 54 lakh per annum. This package was offered by The Noble Group SA to MBA students.<br /><br />In 2022, Sanskriti University also saw a remarkable placement season, with students securing impressive packages across various disciplines. However, the exact salary package has not been officially released.",
    },
    {
      title: "Sanskriti University Average Package",
      description:
        "Sanskriti University average package for the year 2023 is Rs 6.20 LPA. In the previous year, 2022, the B.Tech students secured an average package of Rs 3.25 LPA, while the MBA students were offered an average package of Rs 4.25 LPA.",
    },
  ];

  const data = [
    { label: "Top Recruiters", value: "Amazon Tata, JCB, Paytm, Genpact, HDFC, Larsen & Taurbo, TCS, Vedanta, Radission, Bajaj, Maruti Suzuki, Byju's Tata Steel,Godrej many more."},
    { label: "Placement Statistics", value: "15,000+ students placed in 1,000+ companies annually" },
    { label: "Internships", value: "Provided across various disciplines, with industry exposure" },
    { label: "Highest Package", value: "54 LPA & Average - 5 - 8 LPA" },
    { label: "Student Support", value: "Career counseling, academic advising, mental health support" },
    { label: "Alumni Network", value: "25,000 - 50,000 graduates" },
    { label: "ROI (Return on Investment)", value: "High ROI due to strong placement records and industry partnerships" },
    { label: "Alumni Achievements", value: "Alumni have achieved prominent positions in top firms globally" },
    { label: "Special Programs", value: "Student exchange programs, international internships, study abroad options" },
  ];

  const [showMore, setShowMore] = useState(false);

  const toggleView = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="px-4 sm:px-8 mt-4 bg-[#EDEDE9]">
      {/* About Section */}
      <div className="shadow-md p-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Sanskriti University Placements</h1>

        {/* Sanskriti University Placement 2023 Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{aboutData[0].title}</h2>
          <p
            className="text-gray-700 text-lg"
            dangerouslySetInnerHTML={{
              __html: `${aboutData[0].description}`,
            }}
          />
        </div>

        {/* Placement Details Table (Always Visible) */}
        <div className=" overflow-x-auto">
          <table className="min-w-[500px] sm:min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-left">Category</th>
                <th className="py-2 px-4 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50`}>
                  <td className="py-2 px-4">{item.label}</td>
                  <td className="py-2 px-4">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Remaining Sections (Visible on "View More") */}
        {showMore &&
          aboutData.slice(1).map((aboutItem, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{aboutItem.title}</h2>
              <p
                className="text-gray-700 text-lg"
                dangerouslySetInnerHTML={{
                  __html: `${aboutItem.description}`,
                }}
              />
            </div>
          ))}

        {/* Toggle View More / View Less */}
        <button onClick={toggleView} className="text-blue-500 mt-4">
          {showMore ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default Placements;
