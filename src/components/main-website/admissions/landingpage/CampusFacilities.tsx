import React, { useState } from 'react';

interface Facility {
  name: string;
  icon: string;
}

type AboutData = {
  title: string;
  description: string;
};

const aboutData: AboutData[] = [
  {
    title: "Sanskriti University Mathura Facilities and Infrastructure",
    description:
      "Sanskriti University offers students a number of facilities and amenities on campus thanks to its large campus that is furnished with top-notch amenities and cutting-edge infrastructure. The following list includes some of the amenities provided : <br/> <br/>1. Library: Each library is well-equipped with a collection of more than 1 lakh volumes, periodicals, and magazines, as well as great seating and a setting that is ideal for reading and concentrated study.<br/> <br/>2. Health Care: For the purpose of taking care of the medical requirements on the campus, Sanskriti University has contracted with Nayati Medicity, the top hospital in the area.<br/> <br/>3. Sports: The institution has fields for a variety of sports, including cricket, football, volleyball, basketball, badminton, table tennis, and lawn tennis, as well as for indoor activities like chess, carrom, and flying hockey.<br/> <br/>4. Cafeteria: Students are given access to a wide selection of sanitary and healthful foods. The cafeteria at Sanskriti University campus offers computerised capabilities for simple checkout. Students can access computers in the internet zone in the cafeteria to stay connected."
  },
];



const facilities: Facility[] = [
  { name: 'Academic Zone', icon: '🎓' },
  { name: 'Auditorium', icon: '🎤' },
  { name: 'Boys Hostel', icon: '🏢' },
  { name: 'Canteen', icon: '🍽️' },
  { name: 'Computer Lab', icon: '💻' },
  { name: 'Girls Hostel', icon: '🏠' },
  { name: 'Library', icon: '📚' },
  { name: 'Medical Facilities', icon: '⚕️' },
  { name: 'Cls. Room', icon: '🏫' },
  { name: 'Placement', icon: '💼' },
  { name: 'Grounds', icon: '⚽' },
  { name: 'Trans.', icon: '🚍' },
  { name: 'WiFi', icon: '📶' },
  { name: 'Seminar Hall', icon: '🏛️' },
  { name: 'Conference Room', icon: '🏢' },
  { name: 'Cafeteria', icon: '☕' },
  { name: 'Laboratories', icon: '🧪' },
  { name: 'Hostel', icon: '🏠' },
  { name: 'Common Room', icon: '🛋️' },
];


const CampusFacilities: React.FC = () => {
    const [showAll, setShowAll] = useState(false);
  
    // Toggle visibility of the course list
    const toggleView = () => setShowAll(!showAll);
  
  return (
    <div className='px-4 sm:px-8 mt-8'>
      {aboutData.map((aboutItem, index) => (
          <div key={index}>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{aboutItem.title}</h2>
            <p
              className="text-gray-700 text-lg"
              dangerouslySetInnerHTML={{
                __html: showAll
                ? aboutItem.description
                : `${aboutItem.description.slice(0, 470)}...`,
              }}
            />
          </div>
        ))}
        <div className="mt-0">
          <button
            onClick={toggleView}
            className="text-blue-500 font-semibold mt-2"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
    <div className="shadow-lg bg-gradient-to-r from-purple-400 to-pink-300 p-3 sm:p-6 mt-4">
    
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Campus Facilities</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="flex items-center space-x-1 sm:space-x-2 p-2 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300"
          >
            <span className="text-xl sm:text-2xl">{facility.icon}</span>
            <span className="font-medium">{facility.name}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CampusFacilities;
