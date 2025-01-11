import  { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FormSubmission from "./FormSubmission";
import ReffFrnd from "./ReffFrnd";
import FrndForm from "./FrndForm";
import Mode from "./Mode";
import RegularMode from "./RegularMode";
import EMI from "./EMI";
import OnlineMode from "./OnlineMode";

interface StackItem {
  value: any;
}

class Stack {
   items: StackItem[];

  constructor() {
    this.items = [];
  }

  push(value: any): void {
    this.items.push({ value });
  }
  peek(): any {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1].value;
  }

  pop(): any {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items.pop();
    return item ? item.value : null; // Ensure safe access
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}




function Finder() {
  const back_stack = useRef(new Stack());
   
  
    function backto(na : string){
      setLevelEdur("f");
      setQuestionAnswered("f");
      setQuestionAnswered12("f");
      setCanProceed("f");
      setRegularMode_("f");
      setMode_("f");
      setReffFrnd_("f");
      setAdmissionTaken("f");
      setCourse10th("f");
      setBudgetSelected("f");
      setFormSub("f");
      setEMI_("f");
      setFrndForm_("f");
      setBrand_FormSub("f");
      setOnlineMode_("f");
      setQuestionAnswered13("f")
      
        if(na == "LevelEdu"){
            setLevelEdur("t");
        }
        else if(na == "score10th"){
           setQuestionAnswered("t");

        }
        else if(na == "score12th"){
            setQuestionAnswered12("t");

        }
        else if(na == "canProceed"){
          setCanProceed("t");
        }
        else if(na == "Course10th"){
            setCourse10th("t");
            
        }
        else if(na == "BudgetSelected"){
          setBudgetSelected("t");
        }
        else if(na == "AdmissionTaken"){
          setAdmissionTaken("t");
        }
        else if(na == "ReffFrnd"){
          setReffFrnd_("t");
        }
        else if(na == "Mode"){
          setMode_("t");
        }
        else if(na == "RegularMode"){
          setRegularMode_("t");
        }
        else if(na == "EMI"){
          setEMI_("t");
        }
        else if(na == "OnlineMode"){
          setOnlineMode_("t");
        }
        else if(na == "score13th"){
          setQuestionAnswered13("t");
        }

    }

    
    const [Pick_Your_Level_Of_Education, setPick_Your_Level_Of_Education] = useState<string>("");
    const [LevelEdu, setLevelEdur] = useState<string>("t");

    function LevelEdu_sub(Lv: string) {
        if (Lv === "Completed10th") {
           setPick_Your_Level_Of_Education("Completed10th");
            setQuestionAnswered("t");

        } else if (Lv === "Completed12th") {
          setPick_Your_Level_Of_Education("Completed12th");
            setQuestionAnswered12("t");

        } else if (Lv === "CollegeGraduate") {
          setPick_Your_Level_Of_Education("CollegeGraduate");
          setQuestionAnswered13("t");

        } else if (Lv === "Postgraduate") {
          setPick_Your_Level_Of_Education("Postgraduate");
          setQuestionAnswered13("t");

        } else if (Lv === "DiplomaHolder") {
          setPick_Your_Level_Of_Education("DiplomaHolder");
          setQuestionAnswered13("t");

        } else {
            console.error("Invalid education level");
        }
        setLevelEdur("f");
        back_stack.current.push("LevelEdu");
    }

    //Score10th************************************


  const [marks, setmarks] = useState<string>("");

  const [QuestionAnswered, setQuestionAnswered] = useState<string>("f");

  function handleQuestionSelection(question: string) {
    setmarks(question);
    if (question === "Below 50%") {
      
      setCanProceed("t");
    } else if (question === "50% - 80%") {
      
      setCanProceed("t");
    } else if (question === "Above 80%") {
  
      setCanProceed("t");
    } else {
      console.error("Invalid question selection");
    }
    setQuestionAnswered("f")
    back_stack.current.push("score10th");
  }
    //Score12th************************************

  const [QuestionAnswered12, setQuestionAnswered12] = useState<string>("f");
  
  function handleQuestionSelection12(question: string) {
    setmarks(question);
    if (question === "Below 50%") {
      setCanProceed("t");
    } else if (question === "50% - 80%") {
      setCanProceed("t");
    } else if (question === "Above 80%") {
      setCanProceed("t");
    } else {
      console.error("Invalid question selection");
    }
    setQuestionAnswered12("f")
    back_stack.current.push("score12th");
  }

    //Score13th  graduation************************************

  const [QuestionAnswered13, setQuestionAnswered13] = useState<string>("f");

  function handleQuestionSelection13(question: string) {
    setmarks(question);
    if (question === "Below 50%") {
      setCanProceed("t");
    } else if (question === "50% - 80%") {
      setCanProceed("t");
    } else if (question === "Above 80%") {
      setCanProceed("t");
    } else {
      console.error("Invalid question selection");
    }
    setQuestionAnswered13("f")
    back_stack.current.push("score13th");
  }

  //AdmissionQues10th *********************


  const [Are_you_looking_for_Admission, setAre_you_looking_for_Admission] = useState<string>("");
  const [canProceed, setCanProceed] = useState<string>("f");

  function handleSelection(option: string) {
    setAre_you_looking_for_Admission(option);
    const last_v = back_stack.current.peek();
    if(last_v == "score10th"){
      if (option === "Yes") {
        setCourse10th("t")
      } else if (option === "No") {
        setAdmissionTaken("t")
      }
    }
    else {
      if (option === "Yes") {
        setMode_("t");

      } else if (option === "No") {
        setAdmissionTaken("t")
      }
    }
    
    setCanProceed("f")
    back_stack.current.push("canProceed");
  }

  //Course10th *****************************************

  const [Course_in_10th, setCourse_in_10th] = useState<string>("");

  const [Course10th, setCourse10th] = useState<string>("f");

  function Course10th_sub(option: string) {
    setCourse_in_10th(option);
    if (option === "Polytechnic") {
      setBudgetSelected("t");
    } else if (option === "Other") {
      setBudgetSelected("t");
    }
    setCourse10th("f");
    back_stack.current.push("Course10th");
  }

  //AdmissionTaken***********************************

  const [Have_you_taken_Admission, setHave_you_taken_Admission] = useState<string>("");
  const [AdmissionTaken, setAdmissionTaken] = useState<string>("f");

  function AdmissionTaken_sub(option: string) {
    setHave_you_taken_Admission(option);
    if (option === "adm_Yes") {
      setReffFrnd_("t");
    } else if (option === "adm_No") {
      setLevelEdur("t");
    }
    setAdmissionTaken("f");
    back_stack.current.push("AdmissionTaken");
  }

  //Budget************************************************

  const [Admission_Budget, setAdmission_Budget] = useState<string>("");
 const [BudgetSelected, setBudgetSelected] = useState<string>("f");

  function handleBudgetSelection(option: string) {
    setAdmission_Budget(option);
    if(Pick_Your_Level_Of_Education == "Completed10th"){
      setFormSub("t");
    }
    if(Pick_Your_Level_Of_Education != "Completed10th"){
      if(Admission_Mode != "Regular Mode"){
        setEMI_("t");
      }
      else{
        setFormSub("t");
      }
      
    }
    
    setBudgetSelected("f");
    back_stack.current.push("BudgetSelected");
  }

  //FormSubmission
  const [FormSub, setFormSub] = useState<string>("f");

let prevState = null;
if(FormSub === "t"){
   prevState = back_stack.current.pop();
  
}


const [Would_you_like_to_refer_your_friend, setWould_you_like_to_refer_your_friend] = useState<string>("");
const [ReffFrnd_, setReffFrnd_] = useState<string>("f");
let prevState2 = null;
if(ReffFrnd_ === "t"){
   prevState2 = back_stack.current.pop();
  
}
function ReffFr_d(da: string){
  setWould_you_like_to_refer_your_friend(da);
  if(da === "Yes"){
    setFrndForm_("t");
    setReffFrnd_("f");
  }
  else if(da === "No"){
    setBrand_FormSub("t");
    
  }
  setReffFrnd_("f");
  back_stack.current.push("ReffFrnd");
}
//******Mode*************************************************** */
const [Admission_Mode, setAdmission_Mode] = useState<string>("");
const [Mode_, setMode_] = useState<string>("f");
let prevState5 = null;
if(Mode_ === "t"){
   prevState5 = back_stack.current.pop();
  
}
function Mode_d(da: string){
  setAdmission_Mode(da);
  if(da === "Regular Mode"){
   setRegularMode_("t"); 
  }
  else if(da === "Online Mode"){
    setOnlineMode_("t");
  }
  setMode_("f");
  back_stack.current.push("Mode");
}

//******OnlineMode*************************************************** */
const [OnlineAdmission_Mode, setOnlineAdmission_Mode] = useState<string>("");
const [OnlineMode_, setOnlineMode_] = useState<string>("f");
let prevState8 = null;
if(OnlineMode_ === "t"){
   prevState8 = back_stack.current.pop();
  
}
function OnlineMode_d(da: string){
  setOnlineAdmission_Mode(da);
  if(da === "Regular Mode"){

  }
  else if(da === "Online Mode"){
    
  }
  setBudgetSelected("t");
  setOnlineMode_("f");
  back_stack.current.push("OnlineMode");
}

//******EMI*************************************************** */
const [EMI_v, setEMI_v] = useState<string>("");
const [EMI_, setEMI_] = useState<string>("f");
let prevState7 = null;
if(EMI_ === "t"){
   prevState7 = back_stack.current.pop();
  
}
function EMI_d(da: string){
  setEMI_v(da);
  if(da === "Yes"){

  }
  else if(da === "No"){
    
  }
  setFormSub("t");
  setEMI_("f");
  back_stack.current.push("EMI");
}

//******RegularMode*************************************************** */
const [RegularAdmission_Mode, setRegularAdmission_Mode] = useState<string>("");
const [RegularMode_, setRegularMode_] = useState<string>("f");
let prevState6 = null;
if(RegularMode_ === "t"){
   prevState6 = back_stack.current.pop();
  
}
function RegularMode_d(da: string){
  setRegularAdmission_Mode(da);
  if(da === "Yes"){
   
  }
  else if(da === "No"){
    
  }
  setBudgetSelected("t");
  setRegularMode_("f");
  back_stack.current.push("RegularMode");
}


const [FrndForm_, setFrndForm_] = useState<string>("f");
let prevState3 = null;
if(FrndForm_ === "t"){
   prevState3 = back_stack.current.pop();
  
}

const [Brand_FormSub, setBrand_FormSub] = useState<string>("f");

let prevState4 = null;
if(Brand_FormSub === "t"){
   prevState4 = back_stack.current.pop();
  
}

function Form_sub(jsonD: string) {
  const variables = {
    Pick_Your_Level_Of_Education,
    marks,
    Are_you_looking_for_Admission,
    Course_in_10th,
    Have_you_taken_Admission,
    Admission_Budget,
    Would_you_like_to_refer_your_friend,
    Admission_Mode,
    OnlineAdmission_Mode,
    EMI_v,
    RegularAdmission_Mode,
  };

  // Filter out keys with empty values
  const filteredObject = Object.fromEntries(
    Object.entries(variables).filter(([_, value]) => value !== "")
  );

  // Parse jsonD if it's a JSON string
  let parsedJsonD;
  try {
    parsedJsonD = JSON.parse(jsonD); // Parse jsonD into an object
  } catch (error) {
    console.error("Invalid JSON string provided in jsonD:", error);
    return;
  }

  // Merge objects
  const mergedData = { ...filteredObject, ...parsedJsonD };

  // Convert the merged object back to JSON if needed
  const finalJson = JSON.stringify(mergedData);

  console.log( finalJson);
}

  
  return (
    <>
    <div className={FormSub === "f" ? "hidden" : "block"}>
      <FormSubmission onButtonClick={backto} Form_sub={Form_sub} data={prevState}/>
    </div>

    <div className={ReffFrnd_ === "f" ? "hidden" : "block"}>
      <ReffFrnd onButtonClick={backto} data={prevState2} ReffFrnd_data={ReffFr_d} />
    </div>

    <div className={Mode_ === "f" ? "hidden" : "block"}>
      <Mode onButtonClick={backto} data={prevState5} Mode_data={Mode_d} />
    </div>

    <div className={OnlineMode_ === "f" ? "hidden" : "block"}>
      <OnlineMode onButtonClick={backto} data={prevState8} OnlineMode_data={OnlineMode_d} />
    </div>

    <div className={EMI_ === "f" ? "hidden" : "block"}>
      <EMI onButtonClick={backto} data={prevState7} EMI_data={EMI_d} />
    </div>

    <div className={RegularMode_ === "f" ? "hidden" : "block"}>
      <RegularMode onButtonClick={backto} data={prevState6} RegularMode_data={RegularMode_d} />
    </div>

    <div className={FrndForm_ === "f" ? "hidden" : "block"}>
      <FrndForm onButtonClick={backto} Form_sub={Form_sub} data={prevState3}/>
    </div>

    <div className={Brand_FormSub === "f" ? "hidden" : "block"}>
    <div className="flex items-center justify-center m-10 h-[300px] bg-[#EDEDE9]">
      <div className="w-full">
       <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 pt-[100px] text-center">Become a Brand Ambassador of Your Campus!</h1>
       <FormSubmission onButtonClick={backto} Form_sub={Form_sub} data={prevState4} showHeader={false} showCourse={false} showState ={false}/>
      </div>
     </div>
    </div>

    <div className={LevelEdu === "f" ? "hidden" : "block"}>
      <div className="compo bg-[#EDEDE9] font-poppins p-10 flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          Pick Your Level Of Education
        </h1>
        <div className="bt flex flex-wrap justify-center gap-6 mb-6 mt-5">
          
          <button 
          className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => LevelEdu_sub("Completed10th")}
          >
            Completed 10th
          </button>
          <button 
          className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => LevelEdu_sub("Completed12th")}
          >
            Completed 12th
          </button>

          <button 
          className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => LevelEdu_sub("CollegeGraduate")}
          >
            College Graduate
          </button>

          <button 
          className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => LevelEdu_sub("Postgraduate")}
          >
            Postgraduate
          </button>

          <button 
          className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => LevelEdu_sub("DiplomaHolder")}
          >
            Diploma Holder
          </button>
        </div>
        <div className="mt-5 flex gap-2">
          <Link to="/CollegeFinder">
            <button className="bg-purple-700  text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-pink-500 hover:text-white transition duration-300">
              PREV
            </button>
          </Link>

          <button
            className="cursor-not-allowed 

              bg-gray-400  text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-pink-500 hover:text-white transition duration-300"

             
          onClick={()=> alert("Please Select a option!")}

          >
            Next
          </button>
        </div>
      </div>
    </div>
{/* .................*********************................. */}
    <div className={QuestionAnswered === "f" ? "hidden" : "block"}>
    <div className="bg-[#EDEDE9] font-poppins p-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
      What Was Your Score In 10th?
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mb-6 mt-5">
        <button
          className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => handleQuestionSelection("Below 50%")}
        >
          Below 50%
        </button>

        <button
          className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => handleQuestionSelection("50% - 80%")}
        >
          50% - 80%
        </button>

        <button
          className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => handleQuestionSelection("Above 80%")}
        >
         Above 80%
        </button>
      </div>
      <div className="mt-5 flex gap-2">
          <button className="bg-purple-700 text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => {
            const prevState = back_stack.current.pop();
            if (prevState) backto(prevState);
          }}
          >
            PREV
          </button>
        <button
          className="cursor-not-allowed 

          bg-gray-400  text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"

      
      onClick={()=> alert("Please Select a option!")}

      >
          NEXT
        </button>
      </div>
    </div>
    </div>

{/* ....12thScore.............*********************................. */}
    <div className={QuestionAnswered12 === "f" ? "hidden" : "block"}>
    <div className="bg-[#EDEDE9] font-poppins p-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
      What Was Your Score In 12th?
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mb-6 mt-5">
        <button
          className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => handleQuestionSelection12("Below 50%")}
        >
          Below 50%
        </button>

        <button
          className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => handleQuestionSelection12("50% - 80%")}
        >
          50% - 80%
        </button>

        <button
          className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => handleQuestionSelection12("Above 80%")}
        >
         Above 80%
        </button>
      </div>
      <div className="mt-5 flex gap-2">
          <button className="bg-purple-700 text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => {
            const prevState = back_stack.current.pop();
            if (prevState) backto(prevState);
          }}
          >
            PREV
          </button>
        <button
          className="cursor-not-allowed 

          bg-gray-400  text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"

         
      onClick={()=> alert("Please Select a option!")}

      >
          NEXT
        </button>
      </div>
    </div>
    </div>

{/* ....12thScore.............*********************................. */}
    <div className={QuestionAnswered13 === "f" ? "hidden" : "block"}>
    <div className="bg-[#EDEDE9] font-poppins p-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
      What Was Your Score In Last Degree??
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mb-6 mt-5">
        <button
          className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => handleQuestionSelection13("Below 50%")}
        >
          Below 50%
        </button>

        <button
          className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => handleQuestionSelection13("50% - 80%")}
        >
          50% - 80%
        </button>

        <button
          className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => handleQuestionSelection13("Above 80%")}
        >
         Above 80%
        </button>
      </div>
      <div className="mt-5 flex gap-2">
          <button className="bg-purple-700 text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => {
            const prevState = back_stack.current.pop();
            if (prevState) backto(prevState);
          }}
          >
            PREV
          </button>
        <button
          className="cursor-not-allowed 

          bg-gray-400  text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"

          
       onClick={()=> alert("Please Select a option!")}

       >
          NEXT
        </button>
      </div>
    </div>
    </div>

    {/* AdmissuinQue10th **************************** */}

    <div className={canProceed === "f" ? "hidden" : "block"}>
    <div className="bg-[#EDEDE9] font-poppins p-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
        Are you looking for Admission
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mb-6 mt-5">
        <button
          className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
           onClick={() => handleSelection("Yes")}
        >
          Yes
        </button>
        <button
          className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => handleSelection("No")}
        >
          No
        </button>
      </div>
      <div className="mt-5 flex gap-2">
          <button
            className="bg-purple-700 text-white
            border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
            onClick={() => {
              const prevState = back_stack.current.pop();
              if (prevState) backto(prevState);
            }}
          >
            PREV
          </button>
        <button
          className="cursor-not-allowed 

          bg-gray-400  text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"

          
      onClick={()=> alert("Please Select a option!")}

      >
          NEXT
        </button>
      </div>
    </div>
    </div>

    {/* Course10th********************************* */}

    <div className={Course10th === "f" ? "hidden" : "block"}>
    <div className="bg-[#EDEDE9] font-poppins p-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Select Course</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-6 mt-5">
        <button
          className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => Course10th_sub("Polytechnic")}
        >
          Polytechnic
        </button>
        <button
          className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => Course10th_sub("Other")}
        >
          Other
        </button>
      </div>
      <div className="mt-5 flex gap-2">
          <button
            className="bg-purple-700 text-white
            border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
            onClick={() => {
              const prevState = back_stack.current.pop();
              if (prevState) backto(prevState);
            }}
          >
            PREV
          </button>
        
        <button
            className="cursor-not-allowed 

            bg-gray-400  text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"

            
        
        onClick={()=> alert("Please Select a option!")}

        >
            Next
          </button>
        
      </div>
    </div>
    </div>

    {/* AdmissionTaken********************************** */}

    <div className={AdmissionTaken === "f" ? "hidden" : "block"}>
    <div className="bg-[#EDEDE9] font-poppins p-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
        Have you taken Admission?
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mb-6 mt-5">
        <button
          className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => AdmissionTaken_sub("adm_Yes")}
        >
          Yes
        </button>
        <button
         className="bg-white text-gray-800
         border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
         onClick={() => AdmissionTaken_sub("adm_No")}
        >
          No
        </button>
      </div>
      <div className="mt-5 flex gap-2">
          <button className="bg-purple-700 text-white 
          border font-bold border-gray-300 py-2 px-[50px] rounded-lg 
          hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => {
            const prevState = back_stack.current.pop();
            if (prevState) backto(prevState);
          }}
          >
            PREV
          </button>
        
        <button
            className="cursor-not-allowed 

            bg-gray-400  text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"

           
        
        onClick={()=> alert("Please Select a option!")}

        >
            Next
          </button>
        
      </div>
    </div>
    </div>

    {/* Budget ***********************************/}
    <div className={BudgetSelected === "f" ? "hidden" : "block"}>

    <div className="bg-[#EDEDE9] font-poppins p-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
        How Much Are You Planning To Spend?
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mb-6 mt-5">
        <button
          className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => handleBudgetSelection("Less than 1 Lacs")}
        >
          Less than 1 Lacs
        </button>
        <button
          className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => handleBudgetSelection("1 Lacs - 2.5 Lacs")}
        >
          1 Lacs - 2.5 Lacs
        </button>
        <button
          className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => handleBudgetSelection("2.5 Lacs - 4.2 Lacs")}
        >
          2.5 Lacs - 4.2 Lacs
        </button>
        <button
          className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => handleBudgetSelection("4.2 Lacs - 6 Lacs")}
        >
          4.2 Lacs - 6 Lacs
        </button>
        <button
          className="bg-white text-gray-800
          border border-gray-300 py-2 px-[80px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => handleBudgetSelection("Above 6 Lacs")}
        >
          Above 6 Lacs
        </button>
      </div>
      <div className="mt-5 flex gap-2">
          <button className="bg-purple-700 text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"
          onClick={() => {
            const prevState = back_stack.current.pop();
            if (prevState) backto(prevState);
            setBudgetSelected("f");
          }}
          >
            PREV
          </button>
        <button
          className="cursor-not-allowed 

          bg-gray-400  text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-pink-500  hover:text-white transition duration-300"

         
      
      onClick={()=> alert("Please Select a option!")}

      >
          NEXT
        </button>
      </div>
    </div>
    </div>

    </>
  );
}

export default Finder;
