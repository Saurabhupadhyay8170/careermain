
import AdmCard from "src/components/main-website/admissions/landingpage/AdmCard"
import AdmCard2 from "src/components/main-website/admissions/landingpage/AdmCard2"
import AdmissionProcess from "src/components/main-website/admissions/landingpage/AdmissionProcess"
import CampusFacilities from "src/components/main-website/admissions/landingpage/CampusFacilities"
import CollegeAbout from "src/components/main-website/admissions/landingpage/CollegeAbout"
import CollegeLandingPage from "src/components/main-website/admissions/landingpage/CollegeLandingPage"
import CourseFees from "src/components/main-website/admissions/landingpage/CourseFees"
import CutOff from "src/components/main-website/admissions/landingpage/CutOff"
import Placements from "src/components/main-website/admissions/landingpage/Placements"
import ReviewComponent from "src/components/main-website/admissions/landingpage/ReviewComponent"
import Scholarship from "src/components/main-website/admissions/landingpage/Scholarship"
import UniFaq from "src/components/main-website/admissions/landingpage/UniFaq"
import Updates from "src/components/main-website/admissions/landingpage/Updates"
import PrivacyForm from "src/components/main-website/privacypolicy/PrivacyForm"
const LandingPages = () => {
  return (
    <>

     <div className="font-poppins">
     <CollegeLandingPage/>
     <CollegeAbout/>
     <Updates/>
     <CourseFees/>
     <AdmissionProcess/>
     <AdmCard/>
     <Scholarship/>
     <Placements/>
     <AdmCard2/>
     <CutOff/>
     <CampusFacilities/>
     <ReviewComponent/>
     <UniFaq/>
     <div className="px-4 sm:px-8">
     <PrivacyForm/>
     </div>
     </div>
      
    </>
  );
};


export default LandingPages