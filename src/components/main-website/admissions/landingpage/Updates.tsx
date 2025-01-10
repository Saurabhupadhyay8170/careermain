const Updates = () => {
  const latestUpdates = [
    {
      id: 1,
      title: "New Courses Introduced",
      description:
        "Sanskriti University has introduced new courses in Engineering and Management for the academic year 2025.",
    },
    {
      id: 2,
      title: "University Ranking Improvements",
      description:
        "Sanskriti University has improved its national rankings in engineering and business studies.",
    },
    {
      id: 3,
      title: "New Campus Infrastructure",
      description:
        "The university has added new campus buildings, including a state-of-the-art library and sports complex.",
    },
    {
      id: 4,
      title: "Placement Drive 2025",
      description:
        "The university has successfully placed over 80% of its students in top-tier companies during the placement drive 2025.",
    },
    {
      id: 5,
      title: "Research Collaboration",
      description:
        "Sanskriti University has signed research collaboration agreements with international universities for student and faculty exchange programs.",
    },
  ];

  return (
    <div className="px-4 sm:px-8 bg-[#EDEDE9]">
      <div className="shadow-md p-6">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          Sanskriti University Latest Updates
        </h3>
        <div
          className="flex overflow-x-auto space-x-4"
          style={{
            scrollbarWidth: "thin"
          }}
        >
          
          {latestUpdates.map((update) => (
            <div
              key={update.id}
              className="min-w-[280px] sm:min-w-[300px] max-w-[300px]  bg-pink-100 p-4 mb-2 rounded-lg shadow-md"
            >
              <h4 className="text-xl font-semibold text-purple-700">{update.title}</h4>
              <p className="text-gray-700 mt-2">{update.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Updates;
