// import useFetch from "hooks/useFetch";
// import "./home.css";
// import BaseUrl from "utils/baseurl";
// import { Link } from "react-router-dom";

// const Section1 = () => {
//   const [data] = useFetch(`${BaseUrl}/getWhatsAppUrl`);

//   return (
//     <div className="section1 relative pb-[5rem]">
//       <div className="section-container font-popins relative top-[80px] flex flex-col lg:flex-row">
//         <div className="section-left flex flex-col p-5 gap-5 justify-center w-full lg:w-[60%]">
//           <h1 className="text-[1.87rem] lg:text-[2.8rem] font-semibold">
//             Admission Dreams, Crafted Realities
//           </h1>
//           <p className="text-[16px] lg:text-[1.4rem] mt-[2rem]">
//             Dreaming of the perfect college or university? Let us turn those
//             dreams into realities through our expert admission guidance and
//             counselling services.
//           </p>
//           <Link to={data ? (data as any)[0]?.whatsApp_link : ""} target="_blank">
//             <button type="button" className="bg-primaryBtn hover:bg-hoverBtn btn-shadow rounded-3xl h-[3rem] w-[11rem] text-white text-[16px] font-semibold">CHAT NOW</button>
//           </Link>

//         </div>
//         <div className="section-right w-full lg:w-[40%]">
//           <div>
//             <img src="/home-hero.svg" width={"100%"} height={"100%"} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section1;


// import useFetch from "hooks/useFetch";
import "./home.css";
// import BaseUrl from "utils/baseurl";
import { ContactForm } from "./Section5";
import { useState } from "react";

const Section1 = () => {
  // const [data] = useFetch(`${BaseUrl}/getWhatsAppUrl`);


    const [showForm, setShowForm] = useState(false);
  
    const hideForm = () => {
      setShowForm(false);
    };
  
    const submitHandler = (values:any) => {
      console.log("Form Submitted", values);
      // Handle form submission here, like making an API call
    };
  
  return (
    <div className="section1 font-poppins flex pb-[5rem]">
      {/* Section Container */}
      <div className="section-container font-popins relative top-[20px] flex flex-col lg:flex-row items-center justify-center">

        {/* Left Section */}
        <div className="section-left flex flex-col p-5 gap-6 justify-center w-full lg:w-[60%] text-center lg:text-left">
          <h1 className="text-[2rem] lg:text-[3.2rem] font-bold leading-[1.2] text-purple-700">
            Admission Dreams, <span className="text-pink-500">Crafted Realities</span>
          </h1>
          <p className="text-[16px] lg:text-[1.4rem] mt-[1.5rem] text-gray-700 leading-relaxed">
            Dreaming of the perfect college or university? Let us turn those
            dreams into realities through our expert admission guidance and
            counselling services.
          </p>
          <div className="mt-6">
            {/* <Link to={data ? (data as any)[0]?.whatsApp_link : ""} target="_blank">

            <Link to={data ? (data as any)[0]?.whatsApp_link : ""} target="_blank">
              <button
                type="button"
                className="bg-primaryBtn hover:bg-hoverBtn transition-all duration-300 ease-in-out transform hover:scale-105 btn-shadow rounded-3xl h-[3rem] w-[12rem] text-white text-[16px] font-semibold shadow-lg"
              >
                CHAT NOW
              </button>

            {/*contact form add*/}
            <button
                onClick={() => setShowForm(true)}
                type="button"
                className="border-2 border-purple-700 px-8 text-gray-700 p-2 hover:bg-purple-700 rounded-md hover:text-white text-[16px] font-semibold"
              >
                Talk to College Expert
              </button>
              <ContactForm
                showForm={showForm}
                hideForm={hideForm}
                submitHandler={submitHandler}
                referFriend={false} 
              />
          </div>
        </div>

        {/* Right Section */}
        <div className="section-right w-full lg:w-[40%] flex items-center justify-center relative">
          <div className="relative">
            <img
              src="/home-hero.svg"
              alt="Hero"
              className="w-[90%] lg:w-full max-w-[400px] mx-auto"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
