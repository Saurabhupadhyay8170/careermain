import { useState } from "react";

interface ModeProps {
  onButtonClick: (param: string) => void;
  Mode_data: (param: string) => void;
  data: string;
}

const Mode: React.FC<ModeProps> = ({
  onButtonClick,
  data,
  Mode_data
}) => {
  const bhandleClick = () => {
    onButtonClick(data); // Access onButtonClick and data directly
  };

  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [canProceed, setCanProceed] = useState<boolean>(false);

  // Array of education levels
  const EmployQue = [
    { label: "Regular Mode" },
    { label: "Online Mode"}
  ];

  // Handle button click to set selected education level
  const handleSelection = (level: string) => {
    setSelectedLevel(level); 
    Mode_data(level);
  };

  return (
    <div className="bg-[#EDEDE9] font-poppins p-10 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Mode of degree
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mb-6 mt-5">
        {EmployQue.map((level, index) => (
          <button
            key={index}
            onClick={() => handleSelection(level.label)}
            className="bg-white text-gray-800
            border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300"
            >
            {level.label}
          </button>
        ))}
      </div>
      <div className="mt-5 flex gap-2">
          <button className="bg-[#1F618D] text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300"
          onClick={bhandleClick}
          >
            PREV
          </button>
          <button
            className={`${
              canProceed ? "bg-[#1F618D]" : "bg-gray-400 cursor-not-allowed"
            } text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300`}
            disabled={!canProceed}
          >
            Next
          </button>
      </div>
    </div>
  );
};

export default Mode;
