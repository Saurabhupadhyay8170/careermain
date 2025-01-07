import React, { useState } from "react";

interface AboutItem {
  title: string;
  description: string;
}

const CollegeAbout: React.FC = () => {
  // Define your dynamic data as an object inside the component
  const aboutData: AboutItem[] = [
    {
      title: "About Sanskriti University",
      description:
        "Sanskriti University was established in 2016 as a private university in Mathura. It is recognised by UGC and is also a member of AIU. The university has received approval from BCI, RCI, PCI and NCTE. The Sanskriti University courses are offered through 16 separate schools of specialisation. The programmes offered are from the fields of management, commerce, engineering, education, science and more. Students can check the Sanskriti University course and fees details from this page. <br /><br />The overall Sanskriti University placement percentage is 89 percent including 100 percent placement for diploma, BBA, MBA, and M.Tech courses. Further, the Sanskriti University ranking in India by NIRF ranking 2023 was among the top 101-150 institutes in the innovation area. MBA admission to Sanskriti University is done through the CAT exam. The other entrance exams accepted by Sanskriti University are CUET/ JEE Main/ NEET UG/ XAT and NMAT. The university uses a problem-based learning method and case study method to train their students. <br /><br />Sanskriti University has collaborated with international universities like the University of Cambridge and Help University for Faculty Exchange, Lecture Exchange, and Student Exchange programmes. The university also offers campus placements for students and in 2023 the highest package offered was Rs 54 LPA. In addition to placements, the university helps improve the employability rate of students provide international certifications and internship opportunities. ",
    }
  ];
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="px-4 sm:px-8 bg-[#EDEDE9]">
      {/* About Section */}
      <div className="shadow-md p-4 mb-8">
        {aboutData.map((aboutItem, index) => (
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

export default CollegeAbout