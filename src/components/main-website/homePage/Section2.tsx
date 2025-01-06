// import "./home.css";

// const Section2 = () => {
//   return (
//     <div className="section2 flex flex-col lg:flex-row w-full lg:p-1 my-[5rem]">
//       <div className="section2-left w-full lg:w-[55%]">
//         <p className="lg:text-[43px] text-[20px] font-semibold">Empowering Institutions,</p>
//         <h1 className="lg:text-[40px] text-[20px] font-semibold">Elevating Digital Enrollments</h1>
//         <p className="text-gray-500 mt-[1rem] lg:text-[23px] text-[18px] lg:font-normal font-semibold text-justify">Are you a higher institution looking for enrollment solutions ? <br /> Our innovative approach enhances efficiency, streamlines admissions, and boosts enrollment numbers, ensuring that colleges and universities can stay ahead in the competitive world of admissions. </p>
//       </div>
//        <div className="section2-right flex flex-col my-3 gap-3 px-2 w-full lg:w-[45%]">
//         <div className="section-2-row flex gap-3 flex-col lg:flex-row items-center lg:justify-between">
//          <div className="img-card flex justify-center items-center w-full h-full">
//            <img className="w-full h-full" style={{backgroundSize:'100% 100%'}} src="./logo/Bennett_University.webp" />
//          </div>
//          <div className="img-card flex justify-center items-center w-full h-full">
//            <img className="w-full h-full" style={{backgroundSize:'100% 100%'}} src="./logo/products.png" />
//          </div>
//         </div>

//         <div className="section-2-row flex justify-center">
//           <div className="img-card flex justify-center items-center">
//             <img className="w-full h-full" style={{backgroundSize:'100% 100%'}} src="./logo/1631180032phpvUgTqj.jpeg" />
//           </div>
//         </div>
//        </div>
//     </div>
//   );
// };

// export default Section2;

import "./home.css";

const Section2 = () => {
  return (
    <div className="section2 font-poppins flex flex-col lg:flex-row w-full lg:p-8 py-10 px-5 my-16 bg-gradient-to-r from-[#983fd4] to-[#e46ab3] text-white rounded-lg shadow-lg">
      {/* Left Section */}
      <div className="section2-left w-full lg:w-[55%] p-5 flex flex-col justify-center gap-5">
        <p className="lg:text-4xl text-xl font-bold tracking-wide leading-snug">
          Empowering Institutions,{" "}
          <span className="text-[#f9e8ff]">Elevating Success</span>
        </p>
        <h1 className="lg:text-3xl text-2xl font-semibold leading-relaxed">
          Elevating Digital Enrollments
        </h1>
        <p className="text-[#f8d1ff] mt-4 lg:text-lg text-sm font-light leading-relaxed text-justify">
          Are you a higher institution looking for enrollment solutions? <br />
          Our innovative approach enhances efficiency, streamlines admissions,
          and boosts enrollment numbers, ensuring that colleges and universities
          stay ahead in the competitive world of admissions.
        </p>
      </div>

      {/* Right Section */}
      <div className="section2-right flex flex-col my-3 gap-6 px-5 w-full lg:w-[45%]">
        {/* Row 1 */}
        <div className="section-2-row flex gap-5 flex-col lg:flex-row items-center lg:justify-between">
          <div className="img-card flex justify-center items-center w-full h-[150px] lg:h-[180px] bg-[#ffffff] rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
            <img
              className="w-full h-full object-cover"
              src="./logo/bennett.jpeg"
              alt="Bennett University"
            />
          </div>
          <div className="img-card flex justify-center items-center w-full h-[150px] lg:h-[180px] bg-[#ffffff] rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
            <img
              className="w-full h-full object-cover"
              src="./logo/iilm.png"
              alt="Products"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="section-2-row flex justify-center">
          <div className="img-card flex justify-center items-center w-full h-[150px] lg:h-[200px] bg-[#ffffff] rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
            <img
              className="w-full h-full object-cover"
              src="./logo/images.png"
              alt="Institution"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
