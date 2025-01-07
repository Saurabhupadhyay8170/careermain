import AdmCard from "src/components/main-website/admissions/landingpage/AdmCard"
import AdmissionProcess from "src/components/main-website/admissions/landingpage/AdmissionProcess"
import CollegeAbout from "src/components/main-website/admissions/landingpage/CollegeAbout"
import CollegeLandingPage from "src/components/main-website/admissions/landingpage/CollegeLandingPage"
import CourseFees from "src/components/main-website/admissions/landingpage/CourseFees"
import Placements from "src/components/main-website/admissions/landingpage/Placements"
import Scholarship from "src/components/main-website/admissions/landingpage/Scholarship"
import Updates from "src/components/main-website/admissions/landingpage/Updates"

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
     </div>
    </>
  )
}

export default LandingPages