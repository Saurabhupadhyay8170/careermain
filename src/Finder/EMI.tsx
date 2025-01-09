
interface EMIProps {
  onButtonClick: (param: string) => void;
  EMI_data: (param: string) => void;
  data: string;
}

const EMI: React.FC<EMIProps> = ({
  onButtonClick,
  data,
  EMI_data
}) => {
  const bhandleClick = () => {
    onButtonClick(data); // Access onButtonClick and data directly
  };
  // Array of education EMIs
  const EmployQue = [
    { label: "Yes"},
    { label: "No" }
  ];

  // Handle button click to set selected education EMI
  const handleSelection = (EMI: string) => {
    EMI_data(EMI);
  };

 
  return (
    <div className="bg-[#EDEDE9] font-poppins p-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
      Want To Avail Flexible Payment Through EMIs?
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mb-6 mt-5">
        {EmployQue.map((EMI, index) => (
          <button
            key={index}
            onClick={() => handleSelection(EMI.label)}
            className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300"
          >
            {EMI.label}
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
            className="cursor-not-allowed 
            bg-gray-400  text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300"
        
            onClick={()=> alert("Please Select a option!")}
        >
            Next
          </button>
      </div>
    </div>
  );
};

export default EMI;
